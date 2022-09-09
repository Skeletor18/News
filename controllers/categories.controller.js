const Categori = require('../models/Categori.model.js')
module.exports.categoriesController = {

    postCategories : async (req,res) => {
       const {nameCategori} = req.body;
        try{
             await Categori.create({
            nameCategori
        })
        res.json('Категория добавлена')
        }catch(err){
            res.json(err)
        }
      
    },
    
    deleteCategories : async (req,res) => {
        try{
            await Categori.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        }catch(err){
            res.json(err)
        }
    },

    getCategories :  (req,res) => {
        Categori.find({}).then((data) => {
            res.json(data)
        })
    }
}