const Comment = require('../models/Comment.model')
module.exports.commentsController = {
    deleteComments : async(req,res) =>{
        try{
            await Comment.findByIdAndRemove(req.params.id)
            res.json('Комментарий удален')
        }catch(err){
            res.json(err)
        }
    },
    postComments : async (req,res) => {
        const { nameCamment,textCamment,theNewHeWrote} = req.body
        try{
            await Comment.create({
                nameCamment,
                textCamment,
                theNewHeWrote
            })
            res.json('Комментарий добавлен')
        }catch(err){
            res.json(err)
        }
    },
    getComments : async(req,res) => {
        try{
            const commentsId = await Comment.find({theNewHeWrote:req.params.id})
            res.json(commentsId)
        }catch(err){
            res.json(err)
        }
    }
}