const Character = require ("../models/character")
const { render } = require("ejs");

module.exports = {
    index,
    new: newChar
}

function index (req,res){
    res.render('characters/index', {title: ""})
}

function newChar(req,res){
    res.render('characters/new', {title: ""})
}
