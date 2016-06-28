'use strict';


const express = require('express');

let router = express.Router();


router.use('/flashcards', require('./flashcards'));







module.exports  = router;