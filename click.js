var clicks = 0;
var clickssec = 0;
var clickssec100 = 0;
function onClick() {
        clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function clickspsec(){
    if (clicks > clickssec && clicks >= 100){ 
        clicks = clicks - 100;
        clickssec = clickssec + 10;
    }
    document.getElementById("clickssec").innerHTML = clickssec;
}

function clickspsec100() {
    if (clicks > clickssec100 && clicks >= 1000){
        clicks = clicks - 1000;
        clickssec100 = clickssec100 + 100
        clickssec = clickssec + 100
    }
    document.getElementById("clickssec").innerHTML = clickssec;
}

var intervalID = window.setInterval(myCallback, 1000);
function myCallback() {
    clicks = clicks + clickssec;
    document.getElementById("clicks").innerHTML = clicks;
}

