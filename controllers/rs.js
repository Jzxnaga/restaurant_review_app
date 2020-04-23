const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        Restaurant.findAll({})
        .then(data=>{
            // res.send(data)
            res.render('rs',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports=Controller