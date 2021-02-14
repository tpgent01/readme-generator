// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}
## 🌐 Github URL
[${data.github}](https://github.com/${data.github}/)
## 💬 Description 
${data.description}
## 📓 Table of Contents 
* [Installations](#dependencies)
* [Usage](#usage)
${renderLink(data.license)}
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## 🔌 Installations (Dependencies)
The user should clone the repository from GitHub and open up the project in Visual Studio Code.
To install dependencies, run these commands:
\`\`\`
${data.dependencies}
\`\`\`
## 🎨 Usage
${data.usage}
${renderSection(data.license)}
## ✏️ Contributors
${data.contribution}
Contact me at ${data.email}
## 📊 Tests
Run these commands to test:
\`\`\`
${data.test}
\`\`\`
## ❓ Questions
If you have any questions about this projects, please contact me directly at ${data.email}. 
You can view more of my projects at ${data.github}.
`;
}

// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}


// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## 📛 License
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

module.exports = generateMarkdown;