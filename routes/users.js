var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.json([{
    id: 1,
    username: "vietanh98",
    password: "123"
  }, {
    id: 2,
    username: "lazycatz74",
    password: "1234"
  }]);
});

module.exports = router;
