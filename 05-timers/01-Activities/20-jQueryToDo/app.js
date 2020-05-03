//alert("linked");
/**
 * jQuery TODO
 **/
// When the user clicks any button, run addTask.
$("button").click(addTask);
// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use click, because the element is dynamically created


// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

    // listen to see that key was enter.
    if (event.which == 13) {
        addTask();
    }
});
/*
 *  Use the provided starter HTML to make a list app.
 *  This app will take text from an input box
 *  and display it in another box elsewhere on the page.
 *  Add a way to click and delete the entries you add, too.
 *
 *
 *  Bonus:
 *  ======
 *  Add a new entry when you press the `return` key.
 *  Style it!
 *
 */
