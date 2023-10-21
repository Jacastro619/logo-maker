// install inqurer
const inquirer = require("inquirer");
// require fs
const fs = require("fs");
// import shapes.js module
const Shapes = require("./lib/shapes.js");
// create a questions array for inquirer
const questions = [
  {
    message: "What text would you like in logo? (up to three characters)",
    name: "text",
    validate: (input) => {
      if (input.length < 3) {
        return `Character limit exceeded.`;
      }
      return true;
    },
  },
  {
    message: "What color would you like text>",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like the logo?",
    choices: ["square", "circle", "triangle"],
    name: "shape",
  },
  {
    message: "What color would you like the shape?",
    name: "shapeColor",
  },
];
// use inquire to prompt questions when index.js is ran
// create an init function that will prompt the users with questions
function init() {
  inquirer.prompt(questions).then((data) => {
    // Use switch to create a new instance based on the shape selected
    // When the shape is selected then we will create a new instance of that shape
    switch (data.shape) {
      case "triangle":
        const triangle = new Shapes.Triangle(
          data.shapeColor,
          data.text,
          data.textColor
        );
        writeToFile("./examples/logo.svg", triangle);
        break;
      case "square":
        const square = new Shapes.Square(
          data.shapeColor,
          data.text,
          data.textColor
        );
        writeToFile("./examples/logo.svg", square);
        break;
      case "circle":
        const circle = new Shapes.Circle(
          data.shapeColor,
          data.text,
          data.textColor
        );
        writeToFile("./examples/logo.svg", circle);
        break;
    }
  });
}
// create a function that will write to an svg file
// in function use fs.writeFile to pass render function from shapes.js that will be the contents of the svg file
function writeToFile(filename, text) {
  fs.writeFile(filename, text.render(), (err) => {
    err ? console.log(err) : console.log("Generated logo.svg!");
  });
}
init();
