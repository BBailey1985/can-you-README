
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `
  # ${answers.title}

  ![GitHub license](https://img.shields.io/badge/License-${answers.license}-blue.svg)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project utilizes the ${answers.license} license. Please visit https://www.choosealicense.com/licenses/ for more information.

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.testing}

  ## Questions
  If you have any questions about this project, please contact me at ${answers.email}. Please check out all my other projects at https://www.github.com/${answers.github}
`;
}

module.exports = generateMarkdown;
