// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// This function is what makes the badge show up in the top of the README
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
// this function is putting a link into the license section
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
// this function is putting whatever license you choose into the license section
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
// generated readme function
function generateMarkdown(data) {
  const generatedAnswers= data
  const {title, description, license, installation, usage, contribution, test, github, email } = generatedAnswers
  return `
  ${renderLicenseBadge(license)}
  # ${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#${license})
- [Contributions](#contribution)
- [Test](#test)

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




## Contributions

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

${contribution}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

${test}
  

`;
}

export default generateMarkdown;
