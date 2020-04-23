const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        Restaurant.findAll({})
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports=Controller