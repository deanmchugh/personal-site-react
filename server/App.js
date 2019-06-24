const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const http = require('http')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

require('./route/education.route')(app)
require('./route/employment.route')(app)
require('./route/project.route')(app)
require('./route/user.route')(app)

const port = process.env.PORT || 5000
http.createServer(app).listen(port, () => {
    console.log('Server is running on port ' + port)
})