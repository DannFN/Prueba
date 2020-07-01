var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portafolio de Dann' });
});

router.get('/prueba', function(req, res, next) {
  res.render('prueba', { title: 'Informe' });
});

module.exports = router;
