const RestCountriesModel = require("../models/RestCountriesModel");
const logger = require('../utils/logger');

class RestCountriesController {
  getCountriesByName = async (req, res) => {
    logger.info('GET: /getCountriesByName');
    let response = await RestCountriesModel.getCountriesByName(req);
    return res.status(response.status).json(response.result);
  };
}

module.exports = new RestCountriesController();