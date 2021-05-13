const express = require('express');
const app = express();
const cors = require('cors');
const restCountriesRoutes = require('./routes/restCountriesRoutes');

app.use(cors());
// Routes
app.use('/', restCountriesRoutes);

module.exports = app;