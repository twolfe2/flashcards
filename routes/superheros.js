'use strict';


const express = require('express');
let Superhero = require('../models/superhero');

let router = express.Router();

// /api/superheros

router.route('/')
  .get((req,res) => {
  Superhero.find({}, (err, superheros)=> {
    if(err) return res.status(400).send(err);
    res.send(superheros);

  });
})
  .post((req,res) => {


    Superhero.create(req.body, (err, savedDoc) => {
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
      Superhero.findByIdAndRemove(req.params.id, (err) => {
        if(err) return res.status(400).send(err);

        res.send();
      });
    })
    .get((req,res) => {
      Superhero.findById(req.params.id, (err, superhero) => {
        if(err) return res.status(400).send(err);

        res.send(superhero);
      });
    })
    .put((req, res) => {
      Superhero.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, superhero) => {
        if(err) return res.status(400).send(err);

        res.send(superhero);
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