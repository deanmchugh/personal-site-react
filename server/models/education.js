module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define(
        'education',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            institution: {
                type: Sequelize.STRING
            },
            certificate: {
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
            }
        }
    )
    return Education
}