const express = require('express')
const app = express.Router()

const Controller = require('../app/controllers/General.js')

app.get('/', Controller.index)
app.get('/gameoptions', Controller.options)
app.get('/show', Controller.show)
app.post('/create', Controller.createLanguage)


module.exports = app
