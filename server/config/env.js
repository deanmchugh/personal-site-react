const env = {
    database: 'my_data',
    username: 'root',
    password: 'password',
    host: 'localhost:3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = env