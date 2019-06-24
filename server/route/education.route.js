module.exports = (app) => {
    const education = require('../controller/education.controller')
    app.post('/educationCreate', education.create)
    app.get('/education', education.findAll)
    app.get('/educationUpdate/:educationId', education.update)
    app.get('/educationDelete/:educationId', education.delete)
}