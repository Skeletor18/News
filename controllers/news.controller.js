const New = require('../models/New.model.js')
module.exports.newsController = {

    postNews : async(req,res) => {
        const {title, text,categoriesID} = req.body;
        try{
             await New.create({
            title,
            text,
            categoriesID
        })
         res.json('Новость добавлена')
        }catch(err){
            res.json(err)
        }
       
    },
    deleteNews : async(req,res) => {
        try{
            await New.findByIdAndRemove(req.params.id)
                res.json('Новость удалена')
            
        }catch(err){
            res.json(err)
        }
    },

    patchNews : async(req,res) => {
        try{
            await New.findByIdAndUpdate(req.params.id, req.body)
                res.json('Новость изменина')
            
        }catch(err){
            res.json(err)
        }
    },

    getNews : (req,res) =>{  
            New.find({}).then((data) => {
                res.json(data)
            })
    },
    getNewsById : async(req,res) => {
        try{
           const newId = await New.find({categoriesID:req.params.id})
           res.json(newId)
        }catch(err){
            res.json(err)
        }
    },
    getNew :async(req,res) => {
        try{
            const newOne = await New.findById(req.params.id)
             res.json(newOne) 
        }catch(err){
            res.json(err)
        }
       
    }
}