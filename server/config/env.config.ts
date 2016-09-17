var env = require('node-env-file');

env('./.env');

export { env };