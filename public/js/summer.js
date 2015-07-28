
var card = function (cardNumber, identity, match) {
this.cardNumber=cardNumber,
this.identity=identity,
this.match=match
};
var card1 = new card('card1', 'owl','card2');
var card2 = new card('card2', 'parliament','card1');
var card3 = new card('card3', 'lions','card4');
var card4 = new card('card4', 'pride','card3');
var card5 = new card('card5', 'geese','card6');
var card6 = new card('card6', 'gaggle','card5');
var card7 = new card('card7', 'wolf','card8');
var card8 = new card('card8', 'pack','card7');
var card9 = new card('card9', 'ants','card10');
var card10 = new card('card10', 'colony','card9');
var card11 = new card('card11', 'crows','card12');
var card12 = new card('card12', 'murder','card11');
var card13 = new card('card13', 'ferrets','card14');
var card14 = new card('card14', 'business','card13');
var card15 = new card('card15', 'flamingos','card16');
var card16 = new card('card16', 'flamboience','card15');
var card17 = new card('card17', 'rhinoceroses','card18');
var card18 = new card('card18', 'crash','card17');
var card19 = new card('card19', 'monkeys','card20');
var card20 = new card('card20', 'barrel','card19');

var deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20 ];

memory_card_shuffle = function(){
  var i = deck.length, j, temp;
  while (--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[j];
    deck[j] = deck[i];
    deck[i] = temp;
  }
}
memory_card_shuffle();

function newBoard() {
  card_flipped = 0;
  var output = '';
  // veneryPairs.memory_card_shuffle ();
  for(var i = 0; i < deck.length; i++) {
    output += '<div class =\"memory_cards\" onclick = "memoryFlipCard (' + deck[i].identity + ')"><img src=\"img/Memory_card.png\"></div> ';
  }
  $('#memory_board').html(output);
};

newBoard();

//  window.addEventListener();

function memoryFlipCard(card, val){
  if(card.innerHTML == "" && memory_value.length < 2){
    card.innerHTML = val;
    if(memory_value.length == 0) {
      memory_value.push(val);
      memory_card.ids.push(card.id);
    } else if (memory_value.length == 1){
      memory_value.push(val);
      memory_card.ids.push(card.id);
      if(memory_value [0] == memory_values [1]){
        card_flipped += 2;
        //clear both arrays
        memory_values = [];
        memory_card_ids = [];
        //check to see if the whole board is cleared
        if (cards_flipped == veneryPairs.length) {
          //move to Winter or Spring screen
          document.get('memory_board').innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back(){
          //Flip the 2 cards back over
          var card_1 = document.getElementById(memory_card_ids [0]);
          var card_2 = document.getElementById(memory_card_ids [1]);
          card_1.style.background = 'back of card image no-repeat';
          card_1innerHTML = "";
          card_2.style.background = 'back of card image no-repeat';
          card_2innerHTML = "";
          //clear both arrays
          memory_values = [];
          memory_card_ids = [];
        }
        setTimeout(flip2Back, 900);
      }
    }
  }
}
