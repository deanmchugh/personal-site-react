const express = require('express')
const register = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')

register.use(cors())