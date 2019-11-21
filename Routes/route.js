var express = require('express');
var app = express();
var CategoryController = require('./../Server/Controller/Category/CategoryDetailController');
var router = express.Router();

//By get method it provide the product and category information.
router.get('/allCategories', CategoryController.fetchAllCategories);


module.exports = router;
