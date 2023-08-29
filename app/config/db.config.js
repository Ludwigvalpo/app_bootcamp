//db_bootcamp

module.exports = {
    HOST: 'localhost',
    USER: 'admin',
    PASSWORD: '123456',
    DB: 'db_bootcamp',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }