module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define(
        'project',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING
            },
            language: {
                type: Sequelize.STRING
            },
            repository: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            }
        }
    )
    return Project
}