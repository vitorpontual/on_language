const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const LanguageSchema = new Schema({
   name: String,
   region: String,
   createAt: {
      type: Date,
      default: Date.now
   }
})

const  Language = mongoose.model('Language', LanguageSchema);

module.exports = Language
