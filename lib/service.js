'use strict';

const axios = require('axios');

const headers = {
    'Content-Type': 'application/json'
}

const getData = async (url, apiKey) => {
    try {
        const result = await axios.get(url, {
            headers: {
                ...headers,
                apiKey
            }
        });
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

const postData = async (url, apiKey, data) => {
    return {
        url,
        apiKey,
        ...data
    };
}

module.exports = { getData, postData };