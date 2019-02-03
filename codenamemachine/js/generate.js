var verbs = new Array();
var nouns = new Array();

$.get('res/ListOfVerbs.txt', function (data) {

    verbs = data.split('\n');
    console.log(verbs);

});

$.get('res/ListOfNouns.txt', function (data) {

    nouns = data.split('\n');
    console.log(nouns);

});

function generate(isProject) {

    clearInterval(window.intervalId);
    
    console.log(verbs[0]);
    $("#word").html(verbs[(Math.floor(Math.random() * verbs.length))] + " " + nouns[(Math.floor(Math.random() * nouns.length))]);

    if (isProject) {
        
        $("#type").html("<kbd>project:</kbd>");
        
    } else {
        
        $("#type").html("<kbd>codename:</kbd>");
        
    }
    
}

function loading() {
    
    $("#word").append(".");
    
}

$("#btn-codename").click(function() {

    generate(false);

});

$("#btn-project").click(function() {

    generate(true);

});

$(document).ready(function() {

    window.intervalId = setInterval(loading, 300);

    setTimeout(generate, 1000);
    
})