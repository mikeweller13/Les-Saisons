var saveGame = function() {
    var session = JSON.stringify(saison);
    localStorage.saison = session;
};

if (localStorage.saison) {
  var saison = JSON.parse(localStorage.saison);
} else {
  var saison = {
    winter: false,
    summer: false,
    spring: false
};
  saveGame();
};

var Card = function (cardNumber, identity, match) {
this.cardNumber=cardNumber,
this.identity=identity,
this.match=match
};
var card1 = new Card('card1', 'Owls','one');
var card2 = new Card('card2', 'Parliament','one');
var card3 = new Card('card3', 'Lions','two');
var card4 = new Card('card4', 'Pride','two');
var card5 = new Card('card5', 'Geese','three');
var card6 = new Card('card6', 'Gaggle','three');
var card7 = new Card('card7', 'Wolves','four');
var card8 = new Card('card8', 'Pack','four');
var card9 = new Card('card9', 'Ants','five');
var card10 = new Card('card10', 'Army','five');
var card11 = new Card('card11', 'Crows','six');
var card12 = new Card('card12', 'Murder','six');
var card13 = new Card('card13', 'Ferrets','seven');
var card14 = new Card('card14', 'Business','seven');
var card15 = new Card('card15', 'Flamingoes','eight');
var card16 = new Card('card16', 'Flamboyance','eight');
var card17 = new Card('card17', 'Rhinoceroses','nine');
var card18 = new Card('card18', 'Crash','nine');
var card19 = new Card('card19', 'Monkies','ten');
var card20 = new Card('card20', 'Barrel','ten');

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
  console.log(deck);
};
portraits = function() {
  $('#hint-place').children().remove();
    if (saison.summer) {
        $('#start-place').append('<img id="start" src="img/summer.png"/>');
    } else {
        $('#start-place').append('<img id="start" src="img/summerbw.png"/>');
    }
    $('#start').on({'click': function() {
      $('.erasable').children().remove();
      newBoard();
    }})
    $('#winter-link').on({'click': function() {
        window.location.href = './winter.html';
    }});
    $('#autumn-link').on({'click': function() {
        window.location.href = './index.html';
    }});
}
portraits();
function newBoard() {
  memory_card_shuffle();
  cardsFlipped = 0;
  var output = '';
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

$('#hint-place').children().remove();
$('#hint-place').append('<img id=\"autumn-link\" src=\"img/autumn.png\"/>');
if (saison.winter) {
  $('#hint-place').prepend('<img id="winter-link" src="img/winter.png"/>');
  $('#hint-place').append('<h2 id="hint">Now that I am free, </br>I can help you solve the puzzle.</h2>');
} else {
  $('#hint-place').prepend('<img id="winter-link" src="img/winterbw.png"/>');
};
$('#winter-link').on({'click': function() {
  window.location.href = './winter.html';
}});
$('#autumn-link').on({'click': function() {
  window.location.href = './index.html';
}});

// newBoard();
function memoryFlipCard(chosenCard, picture, identifier) {
  while ((cardIDs[0] !== chosenCard) && (cardValues.length < 2)) {
  $('#' + chosenCard).children().remove();
  $('#' + chosenCard).append('<h5><img class="animal-card" src=\"img/' + picture + '.png\"/></h5>');
    if(cardValues.length == 0) {
      cardValues.push(identifier);
      cardIDs.push(chosenCard);
      if (saison.winter) {
        hint = '';
        getHint = function (ID) {
          switch (ID) {
            case 'one':
            hint = 'Owls travel in Parliaments'
            break;
            case 'two':
            hint = "Lions travel in Prides";
            break;
            case 'three':
            hint = "Geese travel in Gaggles";
            break;
            case 'four':
            hint = "Wolves travel in Packs";
            break;
            case 'five':
            hint = "Ants travel in Armies";
            break;
            case 'six':
            hint = "Crows travel in Murders";
            break;
            case 'seven':
            hint = "Ferrets travel in Businesses";
            break;
            case 'eight':
            hint = "Flamingoes travel in Flamboyances"
            break;
            case 'nine':
            hint = "Rhinoceroses travel in Crashes";
            break;
            case 'ten':
            hint = "Monkies travel in Barrels";
            break;
            default:
            break;
          }
        };
        getHint(identifier);
        $('#hint').remove();
        $('#hint-place').append('<h2 id="hint">' + hint + '</h2>');
      }
    } else if (cardValues.length == 1) {
      cardValues.push(identifier);
      cardIDs.push(chosenCard);
      if (cardValues[0] == cardValues[1]) {
        $('#' + cardIDs[0]).children().unwrap();
        $('#' + cardIDs[1]).children().unwrap();
        cardsFlipped += 2;
        cardValues = [];
        cardIDs = [];
        if (cardsFlipped == deck.length) {
          $('#hint').remove();
          winGame();
          break;
        }
      } else {
        function flip2Back(){
          $('#' + cardIDs[0]).children().remove();
          $('#' + cardIDs[0]).append('<img class=\"pic\" src=\"img/Memory_card.png\">')
          $('#' + cardIDs[1]).children().remove();
          $('#' + cardIDs[1]).append('<img class=\"pic\" src=\"img/Memory_card.png\">')
          cardValues = [];
          cardIDs = [];
        }
        setTimeout(flip2Back, 900);
      }
    }
  }
};

//hints to winter.
winGame = function() {
    $('#hint').remove();
    saison.summer = true;
    saveGame();
    $('#question').append('<h3>Congratulations on solving the puzzle. Summer is free.</h3>')
    if (saison.winter) {
        $('#hint-place').append('<h2 id="hint">Thank you for setting us all free.</h2>');
    } else {
      $('#hint').remove();
      $('#hint-place').append('<h2 id="hint">Thank you! Now please release me, Winter.</h2>');
    }
    // $('#question').append('<button type=button id="submit" class="win">FIN</button>');
    $('#submit').on({'click': function() {
        portraits();
        $('tr').children().remove();
        $('#submit').remove();
    }});

};
