require('dotenv').config();

const dbConfig = {
  server: process.env.DATABASE_SERVER,
  port: parseInt(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE_NAME,
  connectionTimeout: 150000,
  driver: 'tedious',
  stream: false,
  options: {
    encrypt: false,
    appname: 'CD_Artist',
    enableArithAbort: false,
  },
  pool: {
    max: 20,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

module.exports = dbConfig;
