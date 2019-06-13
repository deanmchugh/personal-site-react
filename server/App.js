const express = require('express')
const https = require('https')
const http = require('http')
const app = express()

app.get('/', (rep, res) => {
    res.send('hello back end!')
})

http.createServer(app).listen(5000)