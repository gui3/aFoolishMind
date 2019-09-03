const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: String,
    //description: String,
    content: String
});

const Model = mongoose.model('Article', Schema);

module.exports = Model;
