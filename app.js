const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdownTemplate = require("./markdownTemplate");

const writeFileAsync = util.promisify(fs.writeFile);

const getUserInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project.",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What type of license does your project need?",
      choices: ["MIT", "Apache 2.0", "none"],
    },
    {
      type: "input",
      name: "install",
      message: "What command should be run to install the dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run test?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribute",
      message: "Who are the contributors to the project?",
    },
  ]);
};
