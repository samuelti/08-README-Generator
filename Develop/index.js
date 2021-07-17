// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
//const READMEText = `# Installation \n ${}` 
// TODO: Create an array of questions for user input
const questions = [
{
    name: 'title',
    message: 'What is the name or title of your project?'
},
{
    name: 'description',
    message: 'What does your application do?'
},
{
    name: 'installation', 
    message: 'How do you install the application?'
},
{
    name: 'usage',
    message: 'How do you use the application?'
},
{
    name: 'credits',
    message: 'Who did you work with to make this application?'
},
{
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['GNU_AGPLv3','GNU_GPLv3','GNU_LGPLv3','Mozilla_Public_License_2.0','Apache_License_2.0','MIT_License','Boost_Software','The_Unlicense']
},
{
    name: 'contributing',
    message: 'How would you like others to contribute?'
},
{
    name: 'tests',
    message: 'Please provide some test cases of you application that users can try.'
},
{
    name: 'githubUsername',
    message: 'What is your github username?'
},
{
    name: 'email',
    message: 'What is your email?'
},
{
    name: 'questions',
    message: 'Where should users direct further questions?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    const content = 'content, wow'
    fs.writeFile(fileName, data, err => {
    if (err) {
        console.error(err)
        return
    }
})
}
 
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.info(questions);
        console.info(answers);
        const titleText = `# ${answers.title}\n\n`
        const coolBadges = `![license is ${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue)\n\n`
        const descriptionText = `## Description\n\n${answers.description}\n\n`
        const tableText = `* [Installation](#installation)\n* [Usage](#Usage)\n* [Credits](#Credits)\n* [License](#License)\n* [Contributing](#Contributing)\n* [Tests](#Tests)\n* [Questions?](#Questions?)\n\n`
        const installText = `## Installation\n\n${answers.installation}\n\n`
        const usageText = `## Usage\n\n${answers.usage}\n\n`
        const creditsText = `## Credits\n\n${answers.credits}\n\n`
        const licenseText = `## License\n\nThis Software is protected under the ${answers.license}\n\n`
        const contributingText = `## Contributing\n\n${answers.contributing}\n\n`
        const testText = `## Tests\n\n${answers.test}\n\n`
        const questionsText = `## Questions?\n\nmy github: https://github.com/${answers.githubUsername}\n\nmy email address: ${answers.email}\n\n${answers.questions}\n\n` 
        const READMEText = titleText + coolBadges + descriptionText + tableText + installText + usageText + creditsText + licenseText + contributingText + testText + questionsText;
        writeToFile('README.md', READMEText);
    });
    
}

// Function call to initialize app
init();
