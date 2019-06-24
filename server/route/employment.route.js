module.exports = (app) => {
    const employment = require('../controller/employment.controller')
    app.post('/employmentCreate', employment.create)
    app.get('/employment', employment.findAll)
    app.get('/employmentUpdate/:employmentId', employment.update)
    app.get('/employmentDelete/:employmentId', employment.delete)
}