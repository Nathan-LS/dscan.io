const axios = require('axios');
const client = axios.create({
    baseURL: "https://esi.evetech.net/latest/",
    timeout: 2500,
    headers: {"User-Agent": "dscan.io https://github.dscan.io Maintainer: Nathan nathan@dscan.io"},
    responseType: 'json',
    responseEncoding: 'utf8',
})

module.exports = client;