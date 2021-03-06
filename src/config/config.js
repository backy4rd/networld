require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB_DEV_NAME,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT || 3306,
    dialect: 'mysql',
  },

  test: {
    database: process.env.DB_TEST_NAME,
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASS,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    logging: false,
    dialect: 'mysql',
  },
};
