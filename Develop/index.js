// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter some ifnormation about your project for a "Description" section?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide some information about your project:',
            when: ({ confirmDescription }) => confirmDescription
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to provide installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installtion',
            message: 'Provide installation instructions:',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to provide usage information?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:',
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your project:',
            choices: ['MIT', 'BSD', 'GPL']
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to provide contributing guidlines?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidlines:',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            input: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to provide test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions:',
            when: ({ confirmTest }) => confirmTest
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
