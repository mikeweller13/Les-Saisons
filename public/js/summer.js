
var Card = function (cardNumber, identity, match) {
this.cardNumber=cardNumber,
this.identity=identity,
this.match=match
};
var card1 = new Card('card1', 'owl','card2');
var card2 = new Card('card2', 'parliament','card1');
var card3 = new Card('card3', 'lions','card4');
var card4 = new Card('card4', 'pride','card3');
var card5 = new Card('card5', 'geese','card6');
var card6 = new Card('card6', 'gaggle','card5');
var card7 = new Card('card7', 'wolf','card8');
var card8 = new Card('card8', 'pack','card7');
var card9 = new Card('card9', 'ants','card10');
var card10 = new Card('card10', 'colony','card9');
var card11 = new Card('card11', 'crows','card12');
var card12 = new Card('card12', 'murder','card11');
var card13 = new Card('card13', 'ferrets','card14');
var card14 = new Card('card14', 'business','card13');
var card15 = new Card('card15', 'flamingos','card16');
var card16 = new Card('card16', 'flamboience','card15');
var card17 = new Card('card17', 'rhinoceroses','card18');
var card18 = new Card('card18', 'crash','card17');
var card19 = new Card('card19', 'monkeys','card20');
var card20 = new Card('card20', 'barrel','card19');

var deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20 ];
var cardValues = [];
var cardIDs = [];
var cardsFlipped = 0;

memory_card_shuffle = function(){
  var i = deck.length, j, temp;
  while (--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[j];
    deck[j] = deck[i];
    deck[i] = temp;
  }
};

memory_card_shuffle();

function newBoard() {
  cardsFlipped = 0;
  var output = '';

// veneryPairs.memory_card_shuffle and place into board
  for(var i = 0; i < deck.length; i++) {
    output = '<td><div id=\"' + deck[i].cardNumber + '\" class =\"memory_cards\" onclick = \"memoryFlipCard(deck[' + i + '].cardNumber, deck[' + i + '].identity, deck[' + i + '].match)\"><img class=\"pic\" src=\"img/Memory_card.png\"></div></td> ';
    switch (i % 4) {

      case 0:
      $('#row1').append(output);
      break;

      case 1:
      $('#row2').append(output);
      break;

      case 2:
      $('#row3').append(output);
      break;

      case 3:
      $('#row4').append(output);
      break;
    }
  }
};

newBoard();

function memoryFlipCard(chosenCard, picture, partner) {
//does not successfully check if it's clicking the same card.
  if (($('#' + chosenCard)) && cardValues.length < 2){

  $('#' + chosenCard).children().remove();
  $('#' + chosenCard).append('<h5>' + picture + '</h5>');
    if(cardValues.length == 0) {
      cardValues.push(chosenCard);
      cardIDs.push(partner);
    } else if (cardValues.length == 1){
      cardValues.push(chosenCard);
      cardIDs.push(partner);
//       if(cardsFlipped [0] == memory_values [1]){
//         card_flipped += 2;
//         //clear both arrays
//         memory_values = [];
//         memory_card_ids = [];
//         //check to see if the whole board is cleared
//         if (cards_flipped == veneryPairs.length) {
//           //move to Winter or Spring screen
//           document.get('memory_board').innerHTML = "";
//           newBoard();
//         }
//       } else {
//         function flip2Back(){
//           //Flip the 2 cards back over
//           var card_1 = document.getElementById(memory_card_ids [0]);
//           var card_2 = document.getElementById(memory_card_ids [1]);
//           card_1.style.background = 'back of card image no-repeat';
//           card_1innerHTML = "";
//           card_2.style.background = 'back of card image no-repeat';
//           card_2innerHTML = "";
//           //clear both arrays
//           memory_values = [];
//           memory_card_ids = [];
//         }
//         setTimeout(flip2Back, 900);
      // }
    }
  }
};
