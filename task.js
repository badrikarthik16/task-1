// for one pair selection
function onePairFunction() {
    var x = document.getElementById("OnePairSizeAndColor");
    var radio = document.getElementById("onePairRadioButton");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "flex";
        radio.checked = true;
    } else {
        x.style.display = "none";
        radio.checked = false;
    }
}

// for two Pair selection
function twoPairFunction() {
    var x = document.getElementById("twoPairSizeAndColor1");
    var y = document.getElementById("twoPairSizeAndColor2");
    var radio = document.getElementById("twoPairRadioButton")
    if (x.style.display === "none" || x.style.display === "" || y.style.display === "none" || y.style.display === "") {
        x.style.display = "flex";
        y.style.display = "flex";
        radio.checked = true;
    } else {
        x.style.display = "none";
        y.style.display = "none";
        radio.checked = false;
    }
}

// for three pair selection
function threePairFunction() {
    var x = document.getElementById("threePairSizeAndColor1");
    var y = document.getElementById("threePairSizeAndColor2");
    var z = document.getElementById("threePairSizeAndColor3");
    var radio = document.getElementById("threePairRadioButton")

    if (x.style.display === "none" || x.style.display === "" || y.style.display === "none" || y.style.display === "" || z.style.display === "none" || z.style.display === "") {
        x.style.display = "flex";
        y.style.display = "flex";
        z.style.display = "flex";
        radio.checked = true;
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        radio.checked = false;
    }
}
