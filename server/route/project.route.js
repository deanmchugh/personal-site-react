module.exports = (app) => {
    const project = require('../controller/project.controller')
    app.post('/projectCreate', project.create)
    app.get('/project', project.findAll)
    app.get('/projectUpdate/:projectId', project.update)
    app.get('/projectDelete/:projectId', project.delete)
}