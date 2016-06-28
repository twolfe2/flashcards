'use strict';

let mongoose = require('mongoose');

let flashcardSchema = new mongoose.Schema({
  question: String, 
  answer: String,
  category: String
})

let Flashcard = mongoose.model('Flashcard', flashcardSchema);



module.exports = Flashcard;
