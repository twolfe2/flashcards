'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function() {
  // console.log('hello!');
});

app.controller('flashcardCtrl', function($scope, $state, Card) {
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

app.controller('testingCtrl', function($scope, $state, Card, $stateParams) {
  $scope.categories = {};
  // console.log('test ctrl!');
  Card.getCards()
    .then(res => {
      $scope.cards = res.data;
    });

  $scope.study = () => {
    // debugger;
    console.log($scope.categories);
    let categories = [];
    for (let cat in $scope.categories) {
      if ($scope.categories[cat]) {
        categories.push(cat);
      }
    }
    console.log(categories);
    Card.getByCategory(categories)
      .then(res => {
        let cards = res.data;
        console.log(cards);
        $state.go('study', { cards: cards });
      })

  }






});

app.controller('addCardCtrl', function($scope, Card, $state) {
  // console.log('add ctrl!');
  $scope.addCard = () => {
    Card.postCard($scope.newCard)
      .then(() => {
        $state.go('flashcards');
      })
  }
});

app.controller('editCardCtrl', function($scope, $state, $stateParams, Card) {
  // console.log('edit ctrl!');
  console.log('params', $stateParams.card);
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



app.controller('studyCtrl', function($scope, $state, $stateParams, Card) {
  // $scope.showAnswer = {};
  $scope.question = {};
  $scope.showAnswer = {};
  $scope.cards = $stateParams.cards;
  // console.log()
  // console.log($stateParams.categories);

  // $scope.question = $scope.cards;
  let cards = $stateParams.cards;

  $scope.shuffledCards = shuffle(cards);
  $scope.question[0] = true;

  $scope.show = (index) => {
    // console.log(index);
    
    $scope.showAnswer[index] = true;
  }

  $scope.next = (index) => {
    $scope.question[index] = false;
    console.log($scope.question[index+1]);

    if(Object.keys($scope.question).length > cards.length-1){
      alert('done');
      $state.go('testing');
    }
    $scope.question[index+1] = true;
    // debugger;

  }
  // while (cards.length > 0) {
  //   let index = Math.floor(Math.random() * cards.length);
  //   // debugger;
  //   $scope.showAnswer = false;
  //   $scope.answer = cards[index].answer;
  //   $scope.question = cards[index].question;
  //   $scope.show = () => {
  //     $scope.showAnswer = true;
  //     cards.shift();
  //   }
  // }
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }




})
