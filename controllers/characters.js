const Character = require("../models/character")
const { render } = require("ejs");

module.exports = {
  index,
  new: newChar,
  create
}

function index(req, res) {
  res.render('characters/index', { title: "" })
}

function newChar(req, res) {
  res.render('characters/new', { title: "" })
}

async function create(req, res) {
  const charData = { ...req.body };
  const createdChar = await Character.create(charData)
  try {
    console.log(createdChar)
    res.redirect('/characters/')
  } catch (err) {
    console.log(err)
    res.render("characters/new", { title: 'Create a character', errorMsg: err.message })
  }
}
