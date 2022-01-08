// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
};

const writeFile = (fileName, data => {
fs.writeFile(fileName, data, err => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Congratulations, your readme has been made')
  }
})
};

// TODO: Create a function to initialize app
questions()
.then(responses => {
  generateMarkdown(responses)
})
.then(data => {
  return writeFile(data);
})

// Function call to initialize app
// init() {
// const userAnswers = 
// };
