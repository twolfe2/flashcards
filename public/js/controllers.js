'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function() {
  // console.log('hello!');
});

app.controller('flashcardCtrl', function($scope,$state, Card) {
  // console.log('flash ctrl!');


  Card.getCards()
    .then(res => {
      $scope.cards = res.data
    });




  $scope.deleteCard = (id) => {

    Card.deleteCard(id)
      .then(() => {
        $scope.cards = $scope.cards.filter((card) => {
          return card._id !== id;
        });
      });
  }



  $scope.editCard = (cardObj) => {

    // debugger;
    $state.go('editCard', { card: cardObj });
  }


});

app.controller('testingCtrl', function() {
  console.log('test ctrl!');
});

app.controller('addCardCtrl', function($scope,Card,$state) {
  // console.log('add ctrl!');
  $scope.addCard = () => {
    Card.postCard($scope.newCard)
      .then(() => {
        $state.go('flashcards');
      })
  }
});

app.controller('editCardCtrl', function($scope,$state,$stateParams,Card) {
  // console.log('edit ctrl!');
  console.log('params',$stateParams.card);
  // $scope.editCard={};
  $scope.newCard = $stateParams.card;
  // debugger;

  $scope.editCard = () => {
    Card.editCard($scope.newCard)
      .then(res => {
        $state.go('flashcards');
      })
  }
});
