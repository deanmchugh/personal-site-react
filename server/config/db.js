const Sequelize = require('sequelize')
const env = require('./env')
const db = {}

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.max,
        min: env.min,
        acquire: env.acquire,
        idle: env.idle
    }
})

db.sequelize = sequelize
db.Sequelize = sequelize

db.education = require('../models/education')(sequelize, Sequelize)
db.employment = require('../models/employment')(sequelize, Sequelize)
db.project = require('../models/project')(sequelize, Sequelize)
db.user = require('../models/user')(sequelize, Sequelize)

module.exports = db