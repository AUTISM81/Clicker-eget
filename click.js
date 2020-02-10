// Encase the script in it's own scope, 
// this makes sure other scripts do not override 
// variables and that functions are exclusive to this script only
(() => {
    var clicks = 0;
    var clickssec = 0;
    var clickssec100 = 0;
    
    // Saving the elements as constant variables
    // means that we do not have to query the DOM
    // every time the user clicks, greatly increasing performance
    const clickLabel = document.getElementById("clicks");
    const cpsLabel = document.getElementById("clickssec");

    function onClick() {
            clicks += 1;
        clickLabel.innerHTML = clicks;
    };
    
    function clickspsec(){
        if (clicks > clickssec && clicks >= 100){ 
            clicks = clicks - 100;
            clickssec = clickssec + 10;
        }
        cpsLabel.innerHTML = clickssec;
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
})();

