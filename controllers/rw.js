const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static toReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = Number(req.params.cabang_id)
        let error = req.query.error

        Review.findAll({
            where:{CabangId:idCb},
            include : [{model : User}]
        })
        .then(data=>{
            // res.send(data)
            res.render('rwlist',{data,error})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addReview(req,res){

    }

}

module.exports=Controller