const Language = require('../models/Language')
const Level = require('../models/Level')
module.exports = {
   index(req, res){
      return res.render('general/index')
   },
   async options(req, res){
      try{
	 const languages = await Language.find()
	 const level = await Level.find()

	 return res.render('general/gamesoptions', {languages, level})
      }catch(err){
	 console.error
      }

   },
   async createLanguage(req, res){
      try{ 
	 const language = await Language.create(req.body)
	 return res.send({language})

      }catch(err){
	 console.error(err)
      }
   },
   async show(req, res){
      try{
	 const language = await Language.find()

	 return res.json(language)
      }catch(err){
	 console.error(err)
      }
   }
}
