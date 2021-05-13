
const express = require('express');
const router = express.Router();
const restCountriesController = require("../controllers/restCountriesController");

router.get('/getCountriesByName',restCountriesController.getCountriesByName);

module.exports = router;