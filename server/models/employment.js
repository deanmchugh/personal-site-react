module.exports = (sequelize, Sequelize) => {
    const Employment = sequelize.define(
        'employment',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING
            },
            company: {
                type: Sequelize.STRING
            },
            start: {
                type: Sequelize.DATE
            },
            end: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            skills: {
                type: Sequelize.STRING
            }
        }
    )
    return Employment
}