const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

const levelSchema = new Schema({
   level: String,
   cretaedAT: {
      type: Date,
      default: Date.now
   }
});

const Level = mongoose.model("Level", levelSchema);

module.exports = Level;
