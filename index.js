const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio:',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL:',
    },
];

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const htmlContent = generateHTML(answers);

            fs.writeFile('./index.html', htmlContent, (err) =>
                err
                    ? console.error('Something went wrong!', err)
                    : console.log('Successfull!')
            );
        })
        .catch((error) => {
            console.error(error);
        });
}

init();
