const express = require('express');
const router = express.Router();
const todocontroller = require('../controllers/todocontroller');

router.post('/addtask', todocontroller.create);




//export routes
module.exports = router;
