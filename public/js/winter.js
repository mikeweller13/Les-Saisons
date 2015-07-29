$.ajax({
  url: 'https://api.imgur.com/3/album/ixfMR/json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 0be6c5892b795ca'
  }
})
.done(function(res) {
  pix = res.data.images;
  console.log(pix);
})
.fail(function(err) {
  console.log(err);
});

var saveGame = function() {
    var session = JSON.stringify(saison);
    localStorage.saison = session;
};

//set the game state
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



var newGameMessage = '<h2 id="begin">Click my portrait to begin... </br></br>Count the numbers on the dice.</h2>';

var begin = function() {

    $('#hint-place').children().remove();
    if (saison.summer) {
        $('#hint-place').append('<h2 id="hint">Now that I am free, I can help you solve the riddle.</h2>');
        $('#hint-place').append('<img id="summer-link" src="img/summer.png"/>');
    } else {
        $('#hint-place').append('<img id="summer-link" src="img/summerbw.png"/>');
    };
    $('.erasable').children().remove();
    // $('#start-place').append('<img id=\"autumn-link\" src=\"img/autumn.png\"/>');
    if (saison.winter) {
        $('#start-place').append('<img id="start" src="img/winter.png"/>');
        $('h1').show();
        $('.poem').hide();
    } else {
        $('#start-place').append('<img id="start" src="img/winterbw.png"/>');
    }
    $('#dice-place').append(newGameMessage);
    $('#summer-link').on({'click': function() {
        window.location.href = './summer.html';
    }});
    $('#autumn-link').on({'click': function() {
        window.location.href = './index.html';
    }});
    $('#start').on({'click': function() {
      play.game();
    }});
};

var Icebear = function () {
    this.dice = [];
};

Icebear.prototype.game = function() {
    console.log("game function initiated");
    this.roll();
    this.renderDice();
    this.iceBearQuestion();
};

Icebear.prototype.roll = function() {
    var bears = 0;
    var fish = 0;
    var plankton = 0;
    var holes = 0;
    for (var i = 0; i < 5; i++) {
      this.dice[i]=Math.floor(Math.random()*6 +1);
      switch (this.dice[i]) {

        case 1:
        fish+=6;
        holes+=1;
        break;

        case 2:
        fish+=5;
        break;

        case 3:
        bears+=2;
        plankton+=14;
        holes+=1;
        break;

        case 4:
        fish+=3;
        break;

        case 5:
        bears+=4
        plankton+=14
        holes+=1
        break;

        default:
        fish +=1
      }
    }
    this.dice.push(bears,fish,plankton,holes);
    console.log(this.dice);
    console.log("b", bears, "f", fish, "p", plankton, "h", holes);
    return this.dice;
};

Icebear.prototype.renderDice = function() {
    console.log("rendering dice");
    $('.erasable').children().remove();
    for (var i = 0; i < 5; i++) {
        console.log(this.dice[i]);
    $('#dice-place').append('<li> <img class="dice" src="' + pix[(this.dice[i])-1].link + '"/></li>');
    }
};

Icebear.prototype.iceBearQuestion = function() {
    console.log("bears: ", play.dice[5])
    $('#question').append('<h3>How many polar bears do you see? </h3>');
    if (saison.summer) {
        $('#hint').remove();
        $('#hint-place').prepend('<h2 id="hint">Read the words carefully</h2>');
    };
    $('#question').append('<input type="text" id="input" required=true></input>');
    $('#question').append('<button type=button id="submit">?</button>');
    $('#submit').on({'click': function() {
         var input = $('#input').val();
         console.log("input: ", input);
         if (input == play.dice[5]) {
            play.renderCorrectAnswer(pix[6].link, play.dice[5], "polar bears");
            console.log("bear win");
            play.fishQuestion();
        } else {
            console.log("bear loss");
            play.loseGame();
        }
    }});
};

Icebear.prototype.fishQuestion = function() {
    console.log("fish: ", play.dice[6]);
    $('#hint').children().remove();
    $('#question').children().remove();
    $('#question').append('<h3>How many fish are in the sea?</h3>');
    if (saison.summer) {
        $('#hint').remove();
        $('#hint-place').prepend('<h2 id="hint">Fish avoid the bears and swim at the bottom of the sea.</h2>');
    };
    $('#question').append('<input type="text" id="input" required=true></input>');
    $('#question').append('<button type=button id="submit">?</button>');
    $('#submit').on({'click': function() {
        var input = $('#input').val();
        console.log("input: ", input);
        if (input == play.dice[6]) {
            play.renderCorrectAnswer(pix[7].link, play.dice[6], "fish");
            console.log("fish win");
            play.planktonQuestion();
        } else {
            console.log("fish loss");
            play.loseGame();
        }
    }});
};

Icebear.prototype.planktonQuestion = function() {
    console.log("plankton: ", play.dice[7]);
    $('#question').children().remove();
    $('#question').append('<h3>What about the plankton?</h3>');
    if (saison.summer) {
        $('#hint').remove();
        $('#hint-place').prepend('<h2 id="hint">Plankton avoid the fish and swim through the water.</h2>');
    };
    $('#question').append('<input type="text" id="input" required=true></input>');
    $('#question').append('<button type=button id="submit">?</button>');
    $('#submit').on({'click': function() {
        var input = $('#input').val();
        console.log("input: ", input);
        if (input == play.dice[7]) {
            play.renderCorrectAnswer(pix[8].link, play.dice[7], "plankton");
            console.log("plankton win");
            play.holesQuestion();
        } else {
            console.log("plankton loss");
            play.loseGame();
        }
    }});
};

Icebear.prototype.holesQuestion = function() {
    console.log("holes: ", play.dice[8]);
    $('#question').children().remove();
    $('#question').append('<h3>Of course you know how many holes are in the ice.</h3>');
    if (saison.summer) {
        $('#hint').remove();
        $('#hint-place').prepend('<h2 id="hint">Bears are not always at every single hole in the ice.</h2>');
    };
    $('#question').append('<input type="text" id="input" required=true></input>');
    $('#question').append('<button type=button id="submit">?</button>');
    $('#submit').on({'click': function() {
        var input = $('#input').val();
        console.log("input: ", input);
        if (input == play.dice[8]) {
            play.renderCorrectAnswer(pix[9].link, play.dice[8], "holes");
            console.log("hole win");
            play.winGame();
        } else {
            console.log("hole loss");
            play.loseGame();
        }
    }})
}

Icebear.prototype.winGame = function() {
    $('#question').children().remove();
    saison.winter = true;
    saveGame();
    $('#question').append('<h3>Congratulations on solving the riddle. Winter is free.</h3>')
    if (saison.summer) {
        $('#hint').remove();
        $('#hint-place').prepend('<h2 id="hint">Thank you for setting us all free.</h2>');
    };
    $('#question').append('<button type=button id="submit" class="win">FIN</button>');
    $('#submit').on({'click': function() {
        newGameMessage='<h2 id="begin">Thank you! I\'m free</h2>';
        begin();
    }});
};

Icebear.prototype.renderCorrectAnswer = function(picture, number, item) {
    console.log("rendering correct answer");
    $('#answer').append('<img class="dice" src="' + picture + '"/><h4 class="answer">' + number + ' ' + item + '</h4>');
};

Icebear.prototype.loseGame = function() {
    newGameMessage = '<h2 id="begin">Keep trying and you will understand. Click my portrait to begin again.</h2>';
    $(".poem").hide();
    play.dice = [];
    begin();
};

var play = new Icebear();
console.log("new game started");
begin();
