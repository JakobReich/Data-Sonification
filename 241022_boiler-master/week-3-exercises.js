// week-3-exercises.js
// 
// JavaScript Exercises: 
// Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, arrays, and user input.
//
// This is how you can add an author attribution and software license within your JavaScript code:
// Author: Louis Goldford
// License: Creative Commons Attribution 4.0 International (CC BY 4.0)
// 
// You are free to:
// - Share: copy and redistribute the material in any medium or format
// - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
//
// Under the following terms:
// - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
//   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
//
// Full license text: https://creativecommons.org/licenses/by/4.0/
//
// Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
//
// To “comment in” or “comment out” lines of code in VS Code:  
// Highlight the line(s) of code you want to change, and then:  
// - on Windows: Press Ctrl + / 
// - on Mac: Press Cmd + / 

// Exercise 1: Declare and Initialize a MIDI Note
var x; // declaration
var x = 1; // declaration an initialization (the type and value)

console.log(hallo welt!); // like print in max

var middleC = 60;
console.log(middleC);
console.log("The MIDI note for middle C is: "+ middleC); // a string and an integer, 
console.log("The MIDI note for middle F4 is: "+ (middleC + 5)); // integer + integer

console.log(typeof middleC); // output: "number" but why not integer? in JS, integers and floats are treated as the same

// exercise 2
var phrase1 = "Do Re Mi";
var phrase2 = "Fa Sol La";
var completePhrase = phrase1 + " " + phrase2;
console.log(completePhrase);

// exercise 3
var quarterNote = 1.0; // 1 second
var eigthNote = 0.5; // 0.5seconds
var totalDuration = quarterNote + eigthNote;
console.log("the total duratione is: " + totalDuration);

// exercise 4
var noteDuration = 1.29482734876;
var roundedDuration = Math.round(noteDuration);
console.log("the rounded Duration is :" + roundedDuration);

// exercise 5
var cMajorTriad = [60, 64, 67]; // C, E and G, this is an ARRAY, which can store multiple things
console.log(cMajorTriad);

// exercise 6
var cNote = 60, eNote = 64, gNote = 67;
var averageNote = (cNote + eNote + gNote) / 3;
console.log(averageNote);

// exercise 7 round average of the MIDI notes
var notePitch = 66.384762983476
var roundedMIDInote = Math.round(notePitch);
console.log("the rounded Pitch is : " + roundedMIDInote);

// exercise 8 concatenate solfege into a full scale

var firstPart = "Sol La Ti Do";
var secondPart = "Do Re Mi Fa";
var totalSolfege = firstPart + secondPart;
console.log ("the total solfege scale is : " + totalSolfege);

// exercise 9 add two note duration and round the total
var duration1 = 1.3333, duration2 = 2.666;
var totalDurationRounded = Math.round(duration1 + duration2);
console.log(totalDurationRounded);

// exercise 10 create an array of solfege syllables and randomize them
var solfegeScale = []; // empty array
solfegeScale = ["Do", "RE", "Mi", "Fa", "So", "La", "Ti", "Do"];
// randomize the array
console.log(solfegeScale.sort(() => Math.random() - 0.5));
// the sort() method uses a comparator function, which is needed to sort the elements
// we are using what is called an arrow function syntax: () =>
// these are abreviated ways of writing our functions, but we will cover them and other types of functions later in the course.
// for now understand that this helps us randomly shuffle our array by returning random values between -0.5 and 0.5
// Math.random() - 0.5
// a negative value means the element stays in the same order,
// whereas an positive order menas the elements order will be changed

// exercise 11 inpuit a MIDI note and print it
// method1:
// var userInput = prompt("Enter a MIDI note number"); #this will be an string
// var userInteger = parseInt(userInput);
// console.log(userInteger);
// method2:
var userInput = parseInt(prompt("Enter a MIDI note number:"));
console.log(userInput = 5);

// exercise 12 Input two note durations and add them
var userInputDuration1 = parseInt(prompt("Enter a duration:"));
var userInputDuration2 = parseInt(prompt("Enter a second duration:"));
var addedDuration = userInputDuration1 + userInputDuration2;
console.log("the total duration of the two entered notes is: " + addedDuration);

// exercise 13 input solfege syllables and concatenate them
var solfege1 = prompt("Enter the first Syllable (like Do): ");
var solfege2 = prompt("Enter the second Syllable: ");
var completePhrase2 = solfege1 + " " + solfege2;
console.log(completePhrase2);

// exercise 14 input a tempo and calculate the duration of four beats
// 4 beats in ms
// var tempo = parseInt(prompt("Enter a tempo in bpm: "));
// var beatDuration = 60000 / tempo;
// var fourBeatDuration = beatDuration x 4; #this will be a number
// console.log(fourBeatDuration + " ms"); #will be converted to an string

// exercise 15 input beat duration and calculate tempo in bpm
var beatDurationInput = parseFloat(prompt("Enter the beat duration in ms: "));
var bpm = 60000 / beatDurationInput;
console.log(bpm + " BPM");

// exercise 16 create a simple metronome
var bpmInput = parseInt(prompt("Enter your tempo in bpm: "));
var intervalInMS = 60000 / bpmInput;  #convert to ms
setTimeout(function() { console.log("Tick 1"); }, 0);
setTimeout(function() { console.log("Tick 2"); }, intervalInMS);
setTimeout(function() { console.log("Tick 3"); }, intervalInMS x 2);
setTimeout(function() { console.log("Tick 4"); }, intervalInMS x 3);