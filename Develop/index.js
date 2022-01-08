// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// making an array of questions
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
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
      message: 'Please provide a description of your project.',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a description');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the instructions for installation.',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter installation instructions');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe the usage of your project.',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter usage information');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please explain the guidelines to others can contribute to you project.',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter contribution information');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please provide the instructions for creating tests.',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter creating tests information');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use for your project?',
      choices: ['MIT', 'Apache_2.0', 'GPLv3', 'BSD_3'],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github username',
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
      message: 'Please enter your email address' ,
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

async function init () {
  try {
    const answers = await questions();
    const generatePage = generateMarkdown(answers);
    await writeFileAsync('README.md', generatePage);
    console.log('Congratulations, your README has been created!');
  } catch(err) {
    console.log(err);
  }
}

init();