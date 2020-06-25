var express = require('express');
var router = express.Router();
var User = require("../models/user");
/* SIGNUP  users listing. */
router.route('/signup')
.post((req, res, next) => {
    let user = req.body ;
    User.create(user).then(user=> {
      console.log(user)
      res.statusCode = 200 ;
      res.json({status: true , id: user._id});
    })
    .catch(err=>console.log(err))
})
.get((req,res,next)=> {
  res.end('GET is not supported in /signup');

});
//end signup route 

// start /test/:wissal route
router.route('/test/:wissal')

.get((req, res, next) => {
  
    res.statusCode = 200 ;
    res.json({status: true , id: req.params.wissal});

})




module.exports = router;
