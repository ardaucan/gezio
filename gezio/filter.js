function applyFilter() {
    var crime = document.getElementsByClassName("crime");
    var drama = document.getElementsByClassName("drama");
    var comedy = document.getElementsByClassName("comedy");
    var superhero = document.getElementsByClassName("superhero");
    var romance = document.getElementsByClassName("romance");
    var thriller = document.getElementsByClassName("thriller");
    var sciFi = document.getElementsByClassName("sci-fi");
    var horror = document.getElementsByClassName("horror");

    // First, hide all of them.
    var length = document.getElementsByClassName("activity").length;
    for (var i = 0; i < length; i++) {
        document.getElementsByClassName("activity")[i].style.display = "none";
    }

    // Applies filter for only genres.
    if(document.getElementById("horror").checked) {
        for (const i of horror) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("crime").checked) {
        for (const i of crime) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("drama").checked) {
        for (const i of drama) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("comedy").checked) {
        for (const i of comedy) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("superhero").checked) {
        for (const i of superhero) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("romance").checked) {
        for (const i of romance) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("thriller").checked) {
        for (const i of thriller) {
            i.style.display = "block";
        }
    }
    if (document.getElementById("sci-fi").checked) {
        for (const i of sciFi) {
            i.style.display = "block";
        }
    }
}

function resetFilter() {
    // display all movies
    var length = document.getElementsByClassName("activity").length;
    for (var i = 0; i < length; i++) {
        document.getElementsByClassName("activity")[i].style.display = "block";
    }


    for (const e of document.getElementById("filterContent1").getElementsByTagName("input")) {
        e.checked = false;
    }
    for (const e of document.getElementById("filterContent2").getElementsByTagName("input")) {
        e.checked = false;
    }
}