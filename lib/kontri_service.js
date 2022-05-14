const axios = require('axios');

const getAll = async () => {
    try {
        const result = await axios.get('https://restcountries.com/v3.1/all');
        return {
            data: result.data
        }
    } catch (err) {
        if (err.response) {
            return {
                error: {
                    status: err.response.status,
                    data: err.response.data,
                    message: err.message
                }
            }
        }
        if (err.request) {
            return {
                error: {
                    status: 500,
                    message: err.message
                }
            }
        }
        return {
            error: {
                status: 500,
                message: 'cannot connect due to unseen errors'
            }
        }
    }
}

const getByCode = async (code) => {
    try {
        const result = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        return {
            data: result.data
        }
    } catch (err) {
        if (err.response) {
            return {
                error: {
                    status: err.response.status,
                    data: err.response.data,
                    message: err.message
                }
            }
        }
        if (err.request) {
            return {
                error: {
                    status: 500,
                    message: err.message
                }
            }
        }
        return {
            error: {
                status: 500,
                message: 'cannot connect due to unseen errors'
            }
        }
    }
}

module.exports = { getAll, getByCode };