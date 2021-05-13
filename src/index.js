const app = require('./app');
const logger = require('./utils/logger');
const { configSV } = require('./config/configSV');

app.listen(configSV.port, configSV.hostname, () => {
  logger.info(`Server running at http://${configSV.hostname}:${configSV.port}/`);
}); 