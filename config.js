require('dotenv').load({ silent: true });

var config = {};

config.webPort = process.env.WEB_PORT || 80;

module.exports = config;
