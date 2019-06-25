const db = require('../config/db.config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = db.user

exports.create = (req, res) => {
    User.create({
        username: req.body.title,
        email: req.body.company,
        password: req.body.start
    }).then(user => {
        res.status(201).json({message: user})
    })
}

exports.findAll = (req, res) => {
    User.findAll().then(user => {
        res.status(200).json({message: user})
    })
}

exports.update = (req, res) => {
    const id = req.params.userId
    User.update({
        username: req.body.title,
        email: req.body.company,
        password: req.body.start
    },
    {
        where: {id: req.params.userId}
    }).then(() => {
        res.status(200).json({message: 'user updated ID: ' + id})
    })
}

exports.delete = (req, res) => {
    const id = req.params.userId
    User.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).json({message: 'user deleted ID: ' + id})
    })
}

