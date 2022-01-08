// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(data.license == "MIT"){
      badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
  }else if (data.license == "APACHE 2.0"){
      badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
  }else if (data.license == "GPL 3.0"){
      badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
  }else if (data.license == "BSD 3"){
      badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
  }
}
console.log(data.license)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project utilizes the ${data.license} license

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  If you have any questions about this project, please contact me at ${data.email}. Please check out all my other projects at https://www.github.com/${data.github}
`;
}

module.exports = generateMarkdown;
