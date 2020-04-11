// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
 var name = "Julie";



// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var fiveArray = ["Julie", "Sam", "Karie", "Anne", "Joy"];


// Create an array of five numbers

var fiveNum = [11, 21, 31, 41, 51, 61];




// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for (var i = 0; i < 5; i++){
    console.log("My name is Bob");
}



// Create a for loop that loops through your five string array

for (i = 0; i < fiveArray.length; i++) {
    console.log("My name is " +fiveArray[i]);
}


// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
var division = function(num1,num2) {
    result = num1 / num2;
    console.log(result);

}
division (10, 5);



// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

var  arrayNumberPrint = function (NumberArray) {
    for(i = 0; i < NumberArray.length; i++) {
        console.log("Number: " + NumberArray[i]);
    }
}

var arrayNumber = [11, 21, 31, 41, 51];
arrayNumberPrint(arrayNumber);



// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var employees = {
    name: "Julie",
    id: 101,
    title: "data scientist"


};


// Console log any three of the properties in that object

console.log(employees.name);
console.log(employees.id);
console.log(employees.title);

// Create an Array of 5 Objects

var employeesDb = [
    {
    name: "Julie",
    id: 101,
    title: "data scientist"

    },
    {
    name: "Sam",
    id: 102,
    title: "scientist"
},
{
    name: "Karem",
    id: 103,
    title: "Nurse"
    
},
{
    name: "Karie",
    id: 104,
    title: "Supervisor"
    
},
{
    name: "Olga",
    id: 105,
    title: "Investigator"

    }
]

// Console log 3 properties for every one of the five objects



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
