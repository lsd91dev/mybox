
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: { type: String, required: true },
    github: { type: String, default: '' },
    description: {type: String, default: '' },
});

module.exports = mongoose.model('Project', ProjectSchema);