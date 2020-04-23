const route = require('express').Router();
const rsController = require('../controllers/rs')
const cbController = require('../controllers/cb')
const rwController = require('../controllers/rw')
const usController = require('../controllers/us')


route.get('/',(req,res)=>{
    res.render('home')
})

const cekLogin = function (req, res, next){
  if(!req.session.user){
    res.redirect('/login')
  } else {
    next()
  }
}


route.get('/login', (req, res) =>{
  res.render ('login', {err:req.query.err})
})

route.post('/login',usController.login)

route.get('/restaurants',cekLogin,rsController.findAll)

route.get('/restaurant/:restaurant_id/cabang',cbController.findAll)

route.get('/restaurant/:restaurant_id/cabang/:cabang_id',cbController.findAll)

route.get('/restaurant/:restaurant_id/cabang/:cabang_id/addreview',rwController.toReview)





module.exports=route