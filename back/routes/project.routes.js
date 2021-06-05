const express = require('express')
const ProjectModel = require('../models/project.model');
const { nameRequired } = require('../middlewares/project.middleware');
const router = express.Router();


router.post('/new',[
    nameRequired
], (req, res) => {
    console.log('hola?')
    const { name, github, description } = req.body;
    console.log(name, github, description);
    return res.json({
        ok:true
    })
})

module.exports = { router };