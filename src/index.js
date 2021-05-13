const app = require('./app');
const logger = require('./utils/logger');
const { configSV } = require('./config/configSV');
require("dotenv").config();

app.listen(configSV.port, () => {
  logger.info("*Welcome to X-Men analyze DNA Api*");
  const uriSV = process.env.npm_config_production
    ? process.env.HEROKU_URI
    : `http://${configSV.hostname}:${configSV.port}`;
  logger.info(`Server running at ${uriSV}`);
});