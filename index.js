// install inqurer
const inquirer = require("inquirer");
// require fs
const fs = require("fs");
// import shapes.js module
const Shapes = require("./lib/shapes.js");
// create a questions array for inquirer
const questions = [];
// use inquire to prompt questions when index.js is ran
// create an init function that will prompt the users with questions
function init() {}
// Use switch to create a new instance based on the shape selected
// When the shape is selected then we will create a new instance of that shape
// create a function that will write to an svg file
// in function use fs.writeFile to pass render function from shapes.js that will be the contents of the svg file
init();
