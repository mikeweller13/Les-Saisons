
var veneryPairs =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

veneryPairs [0] = ['card1', 'owl', 'card2'];
veneryPairs [1] = ['card2', 'parliament', 'card1'];
veneryPairs [2] = ['card3', 'lions', 'card4'];
veneryPairs [3] = ['card4', 'pride', 'card3'];
veneryPairs [4] = ['card5', 'geese', 'card6'];
veneryPairs [5] = ['card6', 'gaggle', 'card5'];
veneryPairs [6] = ['card7', 'wolf', 'card8'];
veneryPairs [7] = ['card8', 'pack', 'card7'];
veneryPairs [8] = ['card9', 'ants', 'card10'];
veneryPairs [9] = ['card10', 'colony', 'card9'];
veneryPairs [10] = ['card11', 'crows', 'card12'];
veneryPairs [11] = ['card12', 'murder', 'card11'];
veneryPairs [12] = ['card13', 'ferrets', 'card14'];
veneryPairs [13] = ['card14', 'business', 'card13'];
veneryPairs [14] = ['card15', 'flamingos', 'card16'];
veneryPairs [15] = ['card16', 'flamboience', 'card15'];
veneryPairs [16] = ['card17', 'rhinoceroses', 'card18'];
veneryPairs [17] = ['card18', 'crash', 'card17'];
veneryPairs [18] = ['card19', 'monkeys', 'card20'];
veneryPairs [19] = ['card20', 'barrel', 'card19'];

var memory_value = [];
var memory_card_ids = [];
var card_flipped = 0;

Array.prototype.memory_card_shuffle = function(){
  var i = this.length, j, temp;
  while (--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    temp = this [j];
    this [j] = this [i];
    this [i] = temp;
  }
}

function newBoard() {
  card_flipped = 0;
  var output = '';
  veneryPairs.memory_card_shuffle ();
  for(var i = 0; i < veneryPairs.length; i++) {
    output += '<div id ="card_' + i + '" onclick = "memoryFilpCard (this, \' ' + veneryPairs[i] + '\')"></div> ';
  }
  $('#memory_board').html(output);
}

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
