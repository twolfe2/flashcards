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

})