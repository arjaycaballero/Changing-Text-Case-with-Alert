
// 1 create a var that stores the name that user enters via prompt.
var name = prompt("What is your name?");
// 2 capitalise the first letter of their name.

// part a isolate the first char
var firstChar = name.slice(0,1);
// part b Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
// part c isolate the rest of the name
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
// part d concatenate the first char with the rest of the char
var yourName = upperCaseFirstChar + restOfName;
// 3 we use the capitalised version of their name to greet them using an alert.
// Hello, Arjay.
alert("Hello " + yourName);
