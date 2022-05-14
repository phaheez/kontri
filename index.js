const service = require('./lib/kontri_service');

/**
 * Country Class
 */
class Kontri {
    /**
     * Get All Countries
     * 
     * @returns {Array}
     */
    getAllCountries = async () => {
        const result = await service.getAll();
        return result;
    }

    /**
     * Get Country By Code
     * 
     * @param   {String} code
     * @returns {Array}
     */
    getCountryByCode = async (code) => {
        const result = await service.getByCode(code);
        return result;
    }
}

module.exports = Kontri;