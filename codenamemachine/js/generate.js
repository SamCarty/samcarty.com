$(document).ready(function() {

  var verbs = new Array();
  var nouns = new Array();

  var setup = function() {
    $.get('res/ListOfVerbs.txt', function(data) {
      verbs = data.split('\n');
    });

    return $.get('res/ListOfNouns.txt', function(data) {
      nouns = data.split('\n');
    });
  }

  var generate = function(isProject) {
    clearInterval(window.intervalId);

    $("#word").html(verbs[(Math.floor(Math.random() * verbs.length))] + " " + nouns[(Math.floor(Math.random() * nouns.length))]);

    if (isProject) {
      $("#type").html("<kbd>project:</kbd>");
    } else {
      $("#type").html("<kbd>codename:</kbd>");
    }
  }

  $("#btn-codename").click(function() {
    generate(false);
  });

  $("#btn-project").click(function() {
    generate(true);
  });

  $.when(setup()).then(function() {
    generate(false);
  });
})
