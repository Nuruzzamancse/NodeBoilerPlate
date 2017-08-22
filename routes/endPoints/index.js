var base = process.env.PWD;
var express = require('express');
var router = express.Router();
var dummyController = require('C:/Users/Nuruzzaman/Documents/NodeJS/NodeBoilerplate/app/controllers/dummyController');

router.get('/',dummyController.dummyRoute);

module.exports = router;