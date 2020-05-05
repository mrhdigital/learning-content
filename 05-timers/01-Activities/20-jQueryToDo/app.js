//alert("linked");
/**
 * jQuery TODO
 **/
// When the user clicks any button, run addTask.
$("button").click(addTask);
// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use click, because the element is dynamically created
$(document).on("click", "#delete", removeTask);


// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

    // listen to see that key was enter.
    if (event.which === 13) {
        addTask();
    }
});

// function to add task.
function addTask() {
    // Get the contect (value) of the input box.
    var task = $("#new-task").val();

    //Append that content to the #task div.
    // Nest our content in another div in another div
    // With a span containing an X.
    // Notice that id? we can delete tha task whenever the user clicks the span.
    $("#tasks").append("<div>" + task + "<span id = 'delete'>X</span> </div>");

    // Clear the content of the input box.
    $("#new-task").val("");
}

// Function to remove a task
function removeTask() {
    
}
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
