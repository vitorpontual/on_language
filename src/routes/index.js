const express = require('express')
const app = express.Router()

const Controller = require('../app/controllers/General.js')

app.get('/', Controller.index)
app.get('/gameoptions', Controller.options)


module.exports = app
