module.exports = {
  development: {
    username: 'carljohnson',
    password: 'pineapple',
    port: 3306,
    database: 'onlytests',
    host: 'db',
    dialect: 'mysql',
  },
  test: {
    username: 'carljohnson',
    password: 'pineapple',
    port: 3306,
    database: 'onlytests',
    host: 'db',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  },
};
