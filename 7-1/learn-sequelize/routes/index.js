var express = require('express');
var router = express.Router();
const { sequelize } = require("../models");

/* GET home page. */
router.get('/', function (req, res, next) {

  sequelize.sync({ force: false })
    .then(() => {
      console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
      console.error(err);
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
