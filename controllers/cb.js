const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        let id = req.params.id
        Cabang.findAll({where: { RestaurantId : id }})
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports=Controller