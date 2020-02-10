// Encase the script in it's own scope, 
// this makes sure other scripts do not override 
// variables and that functions are exclusive to this script only
(() => {
    var clicks = 0;
    var clickssec = 0;
    var clickssec100 = 0;
    
    // Saving the elements as constant variables (variables that cannot be changed)
    // means that we do not have to query the DOM
    // every time the user clicks, greatly increasing performance
    const clickLabel = document.getElementById("clicks");
    const cpsLabel = document.getElementById("clickssec");
    const clickButton = document.getElementById("clickBtn");
    const upgradeButtons = document.querySelectorAll("upgrade-btn");

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
    

    // Loop over every upgrade button asynchronously, 
    // saving them as an 'element' paremeter.
    //
    // This means that rather than looping then doing 
    // whatever comes next, we allow the program to continue
    // doing tasks while we are looping.
    //
    // While this makes the loop hard to manage - for 
    // example, we are no longer able to know the output
    // of the loop unless we keep track of how many times it
    // has looped and compare to an expected value.
    upgradeButtons.forEach((element) => {

        // Get the 'cost' and 'clicks' attributes from the element
        // generally, these should be an integer formatted like 'cost="10"'.
        //
        // These attributes are used to reduce the amount of 'magic numbers'
        // in the code. That is, numbers that are simply defined and have no
        // affiliation with the rest of the code. Such numbers should not be defined
        // in the code, but rather in configurations or HTML documents.
        const upgradeCost = parseInt(element.getAttribute('cost'));
        const upgradeClicks = parseInt(element.getAttribute('clicks'));

        element.addEventListener((e) => {
            if(clicks >= upgradeCost) {
                clicks -= upgradeCost;
                clickssec += upgradeClicks;

                cpsLabel.innerHTML = clickssec;
            }
        })
    })
    
    var intervalID = window.setInterval(myCallback, 1000);
    function myCallback() {
        clicks = clicks + clickssec;
        document.getElementById("clicks").innerHTML = clicks;
    }
})();

