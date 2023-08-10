const Character = require("../models/character")

module.exports = {
  index,
  new: newChar,
  create,
  show
}

async function index(req, res) {
  try {
    const characters = await Character.find({})
    console.log(characters)
    res.render('characters/index', { title: "", characters: characters })
  } catch (error) {
    console.log(err.message)
    res.redirect('/')
  }
}

function newChar(req, res) {
  res.render('characters/new', { title: "" })
}

async function create(req, res) {
  const charData = { ...req.body };
  console.log(charData)
  await Character.create(charData)
  try {
    res.redirect('/characters')
  } catch (err) {
    console.log(err)
    res.render("characters/new", { title: 'Create a character', errorMsg: err.message })
  }
}

async function show(req, res) {
    console.log(req.params.id)
    const characters = await Character.findById(req.params.id)
    res.render("characters/show", { title: "", characters: characters })
  }
  