const { Restaurant, Cabang, Review, User } = require('../models/index')
const bcrypt = require('bcrypt')

class Controller{

    static login (req, res) {
        // res.send('uda masuk login nih')
        let temp;
        User.findOne ({
          where: {
            username: req.body.username
          }
        })
        .then ((data)=>{
            temp = data
            const password = req.body.password
            return bcrypt.compare(password, data.password)
        .then(pass => {
            req.session.user = {
              name : temp.name,
              birth : temp.birth,
              email : temp.email,
              username: temp.username
              
            }
            console.log('berhasil')
            res.redirect('/restaurants')
          });
        })
        .catch (err =>{
            console.log(err)
          res.redirect (`/login?err=${err.message}`)
        })
      }



}

module.exports=Controller