const express = require('express')
const app = express()

app.get('/', (rep, res) => {
    res.send('hello back end!!')
})

app.listen(5000)