// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'


// TODO: Create an array of questions for user input
// questions for the readme
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
        type: "list",
        name: 'license',
        message: 'What kind of license do you want?',
        choices: ['MIT', 'ISC', 'BSD', 'Apache', 'I dont want one']
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
    },
    {
        type: "input",
        name: 'github',
        message: 'What is your github profile?'
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
// function that writes the generated README 
function writeFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
// function that initaializes the README
function init() {
    inquirer
    .prompt(questions).then(function (answers) {
    
        const generatedMarkdown = generateMarkdown(answers)
        writeFile("GENERATEDREADME.md", generatedMarkdown)
    });
}

// Function call to initialize app
init();
