'use strict';


var app = angular.module('myApp', ['ui.router']);




app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html',
      controller: 'mainCtrl'
    }) 
    .state('flashcards', {
      url:'/flashcards',
      templateUrl: '/html/flashcards.html',
      controller: 'flashcardCtrl'
    })
    .state('testing', {
      url: '/testing',
      templateUrl:'/html/testing.html',
      controller: 'testingCtrl'
    })
    .state('addCard', {
      url: '/addCard',
      templateUrl: '/html/addCard.html',
      controller: 'addCardCtrl'
    })
    .state('editCard', {
      url: '/editCard',
      templateUrl: '/html/editCard.html',
      controller: 'editCardCtrl',
      params: {card: null}
    })
    .state('study',{
      url:'/study',
      templateUrl: '/html/study.html',
      controller:'studyCtrl',
      params: {cards: null}
    })

})




//custom filters
app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});