if (localStorage.saison) {
  var saison = JSON.parse(localStorage.saison);
} else {
  var saison = {
    winter: false,
    summer: false,
    spring: false
  }
  var session=JSON.stringify(saison);
  localStorage.saison = session;
};
console.log("saison", localStorage.saison);


// render b&w or color summer/winter based on whether puzzle was solved
$('#autumn').append('<img id=\"autumn\" src=\"img/autumn.png\"/>');

if (summer){
  $('#summer').append('<img id=\"summer\" src=img/summer.png/>');
} else {
$('#summer').append('<img id=\"summer\" src=\"img/summerbw.png\"/>');
};
if (winter){
  $('#winter').append('<img id=\"winter\" src=img/winter.png/>');
$('#winter').append('<img id=\"winter\" src=\"img/winterbw.png\"/>');
};

//win scenario
if (summer && winter){
  $('#spring').append('<img id=\"spring\" src=img/spring.png/>');
} else {
$('#spring').append('<img id=\"spring\" src=\"img/springbw.png\"/>');
};


// set up 