const db = require('../config/db.config')
const Project = db.project

exports.create = (req, res) => {
    Project.create({
        title: req.body.title,
        language: req.body.language,
        repository: req.body.repository,
        description: req.body.description
    }).then(project => {
        res.status(201).json({message: project})
    })
}

exports.findAll = (req, res) => {
    Project.findAll().then(project => {
        res.status(200).json({message: project})
    })
}

exports.update = (req, res) => {
    const id = req.params.projectId
    Project.update({
        title: req.body.title,
        language: req.body.language,
        repository: req.body.repository,
        description: req.body.description
    },
    {
        where: {id: req.params.projectId}
    }).then(() => {
        res.status(200).json({message: 'project updated ID: ' + id})
    })
}

exports.delete = (req, res) => {
    const id = req.params.projectId
    Project.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).json({message: 'project deleted ID: ' + id})
    })
}

