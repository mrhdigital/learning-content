// This code will run as soon as the page loads
window.onload = function() {
    alert("Linked!");
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset); 
    $("#start").on("click", stopwatch.start); 

}