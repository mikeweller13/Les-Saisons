$(document).on({'click': function() {
  var saison = {
    winter: false,
    summer: false,
    spring: false
  };
  var session = JSON.stringify(saison);
  localStorage.saison = session;
  window.location.href = './index.html';
}});
