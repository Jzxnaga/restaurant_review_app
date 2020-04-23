const { Restaurant, Cabang, Review, User } = require('../models/index')

class Controller{

    static findAll(req,res){
        let idRs = req.params.restaurant_id
        let dataCb ;
        Cabang.findAll( { where: { RestaurantId : idRs } } )
        .then(data=>{
            dataCb = data
            return Restaurant.findOne({ where: { id : idRs } })
        })
        .then(dataRs=>{
            res.render('cb',{dataCb,dataRs})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static findOne(req,res){
        let id = req.params.cabang_id
        Cabang.findOne ( {  where: { id: id }, include: [ { model: Review } ] } )
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static toReview(req,res){
        let idRs = req.params.restaurant_id
        let idCb = req.params.cabang_id
        
        res.redirect(`/restaurant/${idRs}/cabang/${idCb}/addreview`)
    }

}

module.exports=Controller