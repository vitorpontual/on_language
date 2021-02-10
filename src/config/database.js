const mongoose = require('mongoose')
require('dotenv/config')

const connection = process.env.DB_CONNECTION
console.log(connection)
const dbname = process.env.DB_NAME

mongoose.connect(`mongodb+srv://vpguedes:${connection}@cluster0.pfeza.mongodb.net/${dbname}}`, {
   useNewUrlParser: true, useUnifiedTopology: true
}).then(conn => console.log('DATABASE CONNECTED')).catch(err => console.error(err))

mongoose.Promise = global.Promise;
console.log(mongoose)

module.exports = mongoose;
