var express = require("express");
var router = express.Router();
const {register , signin, signout} = require('../controllers/auth');

router.get('/home', (req,res) => {
  return res.json({
      body : 'hello world',
  });
});

router.post('/register', register);

router.post('/signin', signin);

router.get('/signout', signout);

module.exports = router;  


