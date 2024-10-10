// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: "input",
        name: 'description',
        message: 'What do you want in the description?'
    },
    {
        type: "input",
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: "input",
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: "input",
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: "input",
        name: 'test',
        message: 'What are your test instructions?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
