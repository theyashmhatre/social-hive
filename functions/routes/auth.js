var express = require("express");
var router = express.Router();


router.get('/home', (req,res) => {
  return res.json({
      body : 'hello world',
  });
});


module.exports = router;
