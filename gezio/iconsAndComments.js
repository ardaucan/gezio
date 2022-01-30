 var likeCounter = 256;
 var dislikeCounter = 4;

function writeCounters() {
    document.getElementById("likeCounter").innerText = likeCounter;
    document.getElementById("dislikeCounter").innerText = dislikeCounter;
}

function changeIcon(x) {
    var str = x.className;
    var ret;

    if (str.includes("fas")) {
        str = "far" + str.slice(3);
        ret = false;   // false: deactive the button
    }
    else {
        str = "fas" + str.slice(3);
        ret = true;    // true: activate the button
    }
    x.className = str;
    
    return ret;
}

function changeThumbsUp() {
    var thumbsDown = document.getElementById("dislike");
    var thumbsUp = document.getElementById("like");
    
    changeIcon(thumbsUp) ? likeCounter++ : likeCounter--;

    if (thumbsDown.className == "fas fa-thumbs-down") {
        changeIcon(thumbsDown) ? dislikeCounter++ : dislikeCounter--;
    }
    writeCounters();
}

// Profil sayfası için
function changeThumbsDown() {
    var thumbsDown = document.getElementById("dislike");
    var thumbsUp = document.getElementById("like");

    changeIcon(thumbsDown) ? dislikeCounter++ : dislikeCounter--;

    if (thumbsUp.className == "fas fa-thumbs-up") {
        changeIcon(thumbsUp) ? likeCounter++ : likeCounter--;
    }
    writeCounters();
}

function removeFav(x) {
    x.parentNode.style.display = "none";
    window.alert("Activity removed from the favourites list");
}

// Aktivite ve kategori sayfası için
function changeHeart(x) {
    if (changeIcon(x)) {
        window.alert("Activity added to the favourites list!");
    } 
    else {
        window.alert("Activity removed from the favourites list!");
    }
}

// comment
function submit() {
    var cmnt = document.getElementById("commentArea").value;
    var element = document.getElementById("temp").cloneNode(true);

    document.getElementById("commentList").appendChild(element);

    element.getElementsByTagName("textarea")[0].value = cmnt;
    element.style.display = "block";

    document.getElementById("commentArea").value = "";
}