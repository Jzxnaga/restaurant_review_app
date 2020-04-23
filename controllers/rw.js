const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static toReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = Number(req.params.cabang_id)

        Review.findAll({where:{CabangId:idCb}})
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports=Controller