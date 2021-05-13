//const logger = require('../ut');
const http = require('axios');
const logger = require('../utils/logger');

class RestCountriesModel {
  constructor() {
  }
  
  getCountriesByName = async (req) => {
    const countryName = req.query.countryName;
    const region = req.query.region;
    let response = {status: 200, result: {}, error: ''};
    const query = `https://restcountries.eu/rest/v2/name/${countryName}`;
    logger.info(`Query: ${query}`);
    await http.get(`https://restcountries.eu/rest/v2/name/${countryName}`).then(async res => {
      response.result = await this.addFilterAndSortResponse(res.data, region);
    }
    ).catch(error => {
      logger.error(error);
      response.error = error.status;
    })

    return response;
  }

  addFilterAndSortResponse = async (data, region) => {
    const response = [];
    region && logger.info(`Only countries of ${region}`);
    for (const item of data) {
      if(region){
        region.toUpperCase() === item.region.toUpperCase() 
        && response.push({
          countryName: item.name,
          capitalCity: item.capital,
          img: item.flag
        })
      } else {
        response.push({
          countryName: item.name,
          capitalCity: item.capital,
          img: item.flag
        })
      }
    }
    return response;
  }
}

module.exports = new RestCountriesModel();