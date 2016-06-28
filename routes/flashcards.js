'use strict';


const express = require('express');
let Flashcard = require('../models/flashcard');

let router = express.Router();

// /api/superheros

router.route('/')
  .get((req,res) => {
  Flashcard.find({}, (err, flashcards)=> {
    if(err) return res.status(400).send(err);
    res.send(flashcards);

  });
})
  .post((req,res) => {


    Flashcard.create(req.body, (err, savedDoc) => {
      if(err) return res.status(400).send(err);

      res.send(savedDoc);
    });
    
    //OR, the below is more flexible 
    // let superhero = new Superhero(req.body);

    // superhero.save((err,savedDoc) => {
    //   if(err) return res.status(400).send(err);

    //   res.send(savedDoc);

    // });
})
  


  router.route('/:id')
    .delete((req,res) => {
      Flashcard.findByIdAndRemove(req.params.id, (err) => {
        if(err) return res.status(400).send(err);

        res.send();
      });
    })
    .get((req,res) => {
      Flashcard.findById(req.params.id, (err, flashcard) => {
        if(err) return res.status(400).send(err);

        res.send(flashcard);
      });
    })
    .put((req, res) => {
      Flashcard.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, flashcard) => {
        if(err) return res.status(400).send(err);

        res.send(flashcard);
      });
    })

// router.get('/', (req,res) => {
//   Superhero.find({}, (err, superheros)=> {
//     if(err) return res.status(400).send(err);

//     res.send(superheros);
//   });
// });

// router.post('/', (req,res) => {

// })

module.exports  = router;