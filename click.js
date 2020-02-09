var clicks = 0;
var clickssec = 1;
function onClick() {
    if (clicks < 10){
        clicks += 1;
    }else if (clicks >= 10){
        clicks *= 2;
    }
    document.getElementById("clicks").innerHTML = clicks;
};

function clickspsec(){
    if (clicks >= 10*clickssec){ 
        clicks = clicks - 10*clickssec;
        if (clickssec = 1){
            clickssec = 0;
        }
        clickssec += 10;
        var intervalID = window.setInterval(myCallback, 1000);
        function myCallback() {
            clicks += clickssec;
            document.getElementById("clickssec").innerHTML = clickssec;
            document.getElementById("clicks").innerHTML = clicks;
        }
    }
}