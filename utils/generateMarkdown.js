// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'ISC') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (license === 'BSD') {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `Here is the link to your license:"https://opensource.org/license/MIT"`
  } else if (license === 'ISC') {
    return `Here is the link to your license:"https://opensource.org/license/isc-license-txt"`
  } else if (license === 'BSD') {
    return `Here is the link to your license:"https://opensource.org/license/BSD-3-Clause"`
  } else if (license === 'Apache') {
    return `Here is the link to your license:"https://opensource.org/license/apache-2-0"`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return 'MIT License'
  } else if (license === 'ISC') {
    return 'ISC License'
  } else if (license === 'BSD') {
    return 'IBM License'
  } else if (license === 'Apache') {
    return 'Apache License'
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const generatedAnswers= data
  const {title, description, license, installation, usage, contribution, test, github, email } = generatedAnswers
  return `
  ${renderLicenseBadge(license)}
  # ${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

${usage}

## questions

${github}
${email}


## ${renderLicenseSection(license)}
${renderLicenseLink(license)}



## Badges
 

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

${usage}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

${usage}
  

`;
}

export default generateMarkdown;
