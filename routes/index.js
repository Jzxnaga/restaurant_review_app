const route = require('express').Router();
const rsController = require('../controllers/rs')
const cbController = require('../controllers/cb')
const rwController = require('../controllers/rw')
const usController = require('../controllers/us')

// const cekLogin = function (req, res, next){
//   if(!req.session.user){
//     console.log(err)
//     res.redirect('/login')
//   } else {
//     next()
//   }
// }


route.get('/restaurants',rsController.findAll)

route.get('/restaurant/:id/cabang',cbController.findAll)

module.exports=route