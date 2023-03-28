//Create a function that accepts two numbers, adds them and returns the result

//function add (a,b){ 
   //// return a+b;
//}

//var total = add(3,5)


//Create a defensive check inside the function that handles if the inputs to the function are invalid/non existent
// var a = "three"; 
// var b = 4;


// function add (a,b){ 

//   if (typeof(a) === 'number' && typeof(b) === 'number') { 
//     return a+b}
//     else {
//         console.log("Please insert a valid number");
//     }
// }

// var total = add(a,b)

// console.log(total)

// Question 3 Create an array containing a few items

// var listOfFruits = ["Apple", "Banana", "Orange"]

//console.log(listOfFruits);

// Question 4 Loop over the array using:

//a. for of

//for (var item of listOfFruits) { console.log(item)}

//b. for each

// listOfFruits.forEach((item) => {console.log(item)})

//for (the full blown one)

// for (let i = 0; i < listOfFruits.length; i++) {console.log(listOfFruits[i])}

//Question 5 Create an object
var house = {
room:3, 
colour: "Brown",
cost:100,
}

// Question 6 Add an item to the above object (using . syntax)

house.location = "Poole"; 

// Question 7 Add an item to the above object dynamically (using the [] syntax)

house['HouseNo'] = 30;

// Question 8 Loop over the object using for in

for (let i in house){console.log(i)}
