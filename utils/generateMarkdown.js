// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export const licenseBadge = function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export const licenseLink = function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export const licenseSection = function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const generatedAnswers= data
  const {title, description, installation, usage, contribution, test, github, email } = generatedAnswers
  return `
  ${licenseBadge}
  # ${title}

## Description
${description}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:


- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${usage}
Provide instructions and examples for use. Include screenshots as needed.

## questions

${github}
${email}


## License



## Badges
 

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute
${contribution}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${test}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  

`;
}

export default generateMarkdown;
