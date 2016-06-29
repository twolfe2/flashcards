'use strict';

var app = angular.module('myApp');


app.service('Card', function($http,$q) {

  this.getCards = () => {
    return $http.get('/api/flashcards')
      .catch(err => {
        console.log(err);
      })
  };


  this.postCard = (cardObj) => {
    return $http.post('/api/flashcards',cardObj)
      .catch(err => {
        console.log(err);
      });

  }


  this.deleteCard = (id) => {
    return $http.delete(`/api/flashcards/${id}`)
      .catch(err => {
        console.log(err);
      });
  }

  this.editCard = (cardObj) => {
    // console.log(cardObj, cardObj);

    return $http.put(`/api/flashcards/${cardObj._id}`,cardObj)
      .catch(err => {
        console.log(err);
      });

  }

  this.getByCategory = (categories) => {
    return $http.post('/api/flashcards/categories',{categories})
      .catch(err => {
        console.log(err);
      })
  }





})





