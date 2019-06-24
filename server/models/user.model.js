module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.DATE
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.DATE
            }
        }
    )
    return User
}