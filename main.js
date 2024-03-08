// Day 02 of #100dayscodingchallenge
//Question 9
// Printing My favorite number .
var FavoriteNumber = "7";
console.log("My favorite number is", FavoriteNumber);
// Question 10
// Author [Abdul Samad]
// Date [feb / 24 /2024]
// Question 11
var Name = ["Azam", "Ali", "Aqib", "Hamza"];
console.log(Name[0]);
console.log(Name[1]);
console.log(Name[2]);
console.log(Name[3]);
// Question 12
var Name1 = ["Azam", "Ali", "Aqib", "Hamza"];
var message = "Are you learning web3.0 and metaverse?";
console.log(Name1[0], message);
console.log(Name1[1], message);
console.log(Name1[2], message);
console.log(Name1[3], message);
// Question 13
var transpotation = ["Honda civic", "Fortuner", "Honda bike"];
transpotation.map(function (item) { return console.log("I would like to own a", item); });
// Question 14
var guestArr = ["Azam", "Aqib", "Hamza", "Abdul"];
guestArr.map(function (item) { return console.log("Dear", item, "you Are invited to the Dinner."); });
// Question 15
var canNotAttend = "Hamza";
//console.log(canNotAttend, "Can not Attend the Dinner.");
var newguest = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newguest;
guestArr.map(function (item) { return console.log("Dear", item, "Your Are Invited to the Dinner."); });
