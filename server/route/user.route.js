module.exports = (app) => {
    const user = require('../controller/user.controller')
    app.post('/register', user.create)
    app.get('/login', user.findAll)
    app.get('/userUpdate/:userId', user.update)
    app.get('/userDelete/:userId', user.delete)
}