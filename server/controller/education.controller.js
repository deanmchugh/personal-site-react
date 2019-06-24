const db = require('../config/db.config')
const Education = db.education

exports.create = (req, res) => {
    Education.create({
        institute: req.body.institute,
        certificate: req.body.certificate,
        start: req.body.start,
        end: req.body.end,
        description: req.body.description,
        skills: req.body.skills
    }).then(education => {
        res.status(201).json({message: education})
    })
}

exports.findAll = (req, res) => {
    Education.findAll().then(education => {
        res.status(200).json({message: education})
    })
}

exports.update = (req, res) => {
    const id = req.params.educationId
    Education.update({
        institute: req.body.institute,
        certificate: req.body.certificate,
        start: req.body.start,
        end: req.body.end,
        description: req.body.description,
        skills: req.body.skills
    },
    {
        where: {id: req.params.educationId}
    }).then(() => {
        res.status(200).json({message: 'education updated ID: ' + id})
    })
}

exports.delete = (req, res) => {
    const id = req.params.educationId
    Education.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).json({message: 'education deleted ID: ' + id})
    })
}

