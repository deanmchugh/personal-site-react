const db = require('../config/db.config')
const Employment = db.employment

exports.create = (req, res) => {
    Employment.create({
        title: req.body.title,
        company: req.body.company,
        start: req.body.start,
        end: req.body.end,
        description: req.body.description,
        skills: req.body.skills
    }).then(employment => {
        res.status(201).json({message: employment})
    })
}

exports.findAll = (req, res) => {
    Employment.findAll().then(employment => {
        res.status(200).json({message: employment})
    })
}

exports.update = (req, res) => {
    const id = req.params.employmentId
    Employment.update({
        title: req.body.title,
        company: req.body.company,
        start: req.body.start,
        end: req.body.end,
        description: req.body.description,
        skills: req.body.skills
    },
    {
        where: {id: req.params.employmentId}
    }).then(() => {
        res.status(200).json({message: 'employment updated ID: ' + id})
    })
}

exports.delete = (req, res) => {
    const id = req.params.employmentId
    Employment.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).json({message: 'employment deleted ID: ' + id})
    })
}

