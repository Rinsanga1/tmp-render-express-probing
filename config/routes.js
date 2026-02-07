const express = require("express");


const hello = require("../app/controllers/hello_controller");


const router = express.Router();


router.get('/', hello.index);
router.get('/show', hello.show);
router.get('/new', hello.new);


module.exports = router;
