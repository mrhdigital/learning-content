// This code will run as soon as the page loads
window.onload = function() {
    alert("Linked!");
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset); 
    $("#start").on("click", stopwatch.start); 

}


// Our stopwatch object
var stopwatch = {
    time: 0,
    lap: 1,

    reset: function() {
        stopwatch.time = 0;
        stopwatch.lap = 1;

        // Done: change the "display" div to "00:00."
        $("$display").text("00:00");

        // Done: Empy the "laps" div.
        $("#laps").text("");
    }
}