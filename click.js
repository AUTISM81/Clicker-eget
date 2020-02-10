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
    const clickButton = document.getElementById("clickBtn");

    // By using both the 'click' and the 'ontouchstart' events
    // we can easily allow for touch support without having
    // to restructure the code much
    ['click','ontouchstart'].forEach((eventname) => {

        // Using an eventlistener, we can programmatically add
        // events without having to edit the html.
        //
        // This is generally preferred over onclick="" events
        // as it is more adaptable and obscures the events 
        // from the user, making them more secure.
        //
        // html-based events also do not work with methods inside their own scope.
        clickButton.addEventListener(eventname, (event) => {
            // Increases 'clicks' by 1 
            clicks++;

            clickLabel.innerHTML = clicks;
        })
    });
    
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

