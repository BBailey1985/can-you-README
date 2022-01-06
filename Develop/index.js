// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// making an array of questions
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.' 
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the instructions for installation.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe the instructions for use of your program.'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please explain the guidelines to others can contribute to you project.'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please provide the instructions for creating tests.',
      default: 'npm test'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use for your project?',
      choices: ['GNU', 'Mozilla', 'Apache', 'MIT', 'Boost', 'N/A'],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github username (Required)',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('Please enter a GitHub username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      }
    }
  ])
  .then(data => {
    console.log(data.title)
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!'))
  });
};

// TODO: Create a function to initialize app
questions()

// Function call to initialize app
// init();
