'use strict';

const service = require('./lib/service');
/**
 * Country Class
 */
class KontriAPI {
    #apiKey;
    #baseURL;

    constructor(APIKEY, environment = 'development') {
        const apiBase = {
            sandbox: 'https://restcountries.com/v3.1',
            live: 'https://restcountries.com/v3.1'
        };

        this.#apiKey = APIKEY;
        this.#baseURL = (environment.toLowerCase() === 'production') ? apiBase.live : apiBase.sandbox;
    }

    /**
     * Get All Countries
     * 
     * @returns {Array}
     */
    getAllCountries = async () => {
        return await service.getData(`${this.#baseURL}/all`, this.#apiKey);
    }

    /**
     * Get Country By Code
     * 
     * @param   {String} code
     * @returns {Array}
     */
    getCountryByCode = async (code) => {
        return await service.getData(`${this.#baseURL}/alpha/${code}`, this.#apiKey);
    }

    /**
     * Add New Country
     * 
     * @param   {Object} { name, code }
     * @returns {Object} { url, name, code }
     */
    addCountry = async (data) => {
        const { name, code } = data;
        return await service.postData(`${this.#baseURL}/add-country`, this.#apiKey, { name, code });
    }
}


module.exports = KontriAPI;