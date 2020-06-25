var express = require('express');
var router = express.Router();

router.route("/sauce")

.get((req,res,next)=> {
    res.json({status: true , msg : "this is sauses/sauce API"})
})



module.exports = router;