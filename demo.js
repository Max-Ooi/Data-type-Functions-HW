//Question 1 In a series of variables store: a String, a number and a Boolean

var myName = "Max";
var myAge = 26;
var hasAJob = true;

//Question 2 Add two numbers

var a = 5 + 2; 

//or 

var num1 = 1;
var num2 = 3; 

b = num1 + num2; 


// Question 3 Use the shorthand to add 1 to a number

var num3 = 1

num3++ 



// Question 4 Use the shorthand to remove 1 from a number

var num4 = 1

num4--

//Question 5 Concatenate two string

var firstName = "Max";
var surName = "Ooi";
var fullName = firstName + " " + surName;

//Question 6 an IF statement which checks if a variable matches another variable, if so it should console log a message

var score1 = 100;
const fullMark = 100;

if (score1 == 100) {

    console.log("Well done you scored full marks!")
}

//Question 7 IF statements to check if two things are true, if so show a message

var score2 = 66;

if (score2 > 59 && score2 < 70) {
    console.log("you got a 2.i")
}

//Question 8 Store in a variable someone’s name, age and height. Choose between an object and an array.

var person1 = {
    name: "Max",
    age: 26, 
    height:176,
}

console.log(person1.name)