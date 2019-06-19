const express = require('express')
const search = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

search.use(cors())