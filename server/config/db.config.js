const Sequelize = require('sequelize')
const env = require('./env')

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

const db = {}
db.sequelize = sequelize
db.Sequelize = sequelize

db.education = require('../models/education.model')(sequelize, Sequelize)
db.employment = require('../models/employment.model')(sequelize, Sequelize)
db.project = require('../models/project.model')(sequelize, Sequelize)
db.user = require('../models/user.model')(sequelize, Sequelize)

module.exports = db