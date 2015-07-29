if (localStorage.saison) {
  var saison = JSON.parse(localStorage.saison);
} else {
  var saison = {
    winter: false,
    summer: false,
    spring: false
  };
  var session = JSON.stringify(saison);
  localStorage.saison = session;
};

console.log("saison", localStorage.saison);

renderSeasons = function() {
  $('#message').children().remove();
  $('.season').children().remove();
  if (saison.spring) {
    $('#message').append('<h2>Thank you so much! We are reunited.                              </h2>');
  } else {
    $('#message').append('<h2>I am without my sisters. Please reunite us. </br>Solve the puzzles so we can all be together. </br>Only then can we unlock our youngest sister, Spring.</h2>');
  };
  // render b&w or color summer/winter based on whether puzzle was solved
  $('#autumn').append('<img id=\"autumn\" src=\"img/autumn.png\"/>');
  if (saison.summer){
    $('#summer').append('<img id=\"summer\" src=\"img/summer.png\"/>');
  } else {
  $('#summer').append('<img id=\"summer\" src=\"img/summerbw.png\"/>');
  };
  if (saison.winter){
    $('#winter').append('<img id=\"winter\" src=\"img/winter.png\"/>');
  } else {
  $('#winter').append('<img id=\"winter\" src=\"img/winterbw.png\"/>');
  };
  // win scenario
  $('#spring').on({'click': function() {
    if (saison.winter && saison.summer) {
      saison.spring = true;
      renderSeasons();
    };
  }});

  if (saison.spring){
    $('#spring').append('<img id=\"spring\" src=\"img/spring.png\"/>');
  } else {
    $('#spring').append('<img id=\"spring\" src=\"img/springbw.png\"/>');
  }
};

$('#summer').on({'click': function() {
  window.location.href = './summer.html';
}});

$('#winter').on({'click': function() {
  window.location.href = './winter.html';
}});

$('#reset').on({'click': function() {
  saison = {
    winter: false,
    summer: false,
    spring: false
  };
  session = JSON.stringify(saison);
  localStorage.saison = session;
  renderSeasons();
}});

renderSeasons();
