// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
const inquirer = require('inquirer');
const fs = require('fs');


    
        const questions = [{
            type: 'input',
            message: "What is the project title?",
            name: 'name',



        },

        {
            type: 'input',
            message: "Write a description of functionality",
            name: 'description',



        },

        {
            type: 'input',
            message: "Provide a link to the deployed application",
            name: 'linktodeployedapplication',



        },
        {
            type: 'input',
            message: "Provide a screen shot of deployed application",
            name: 'Screenshot',



        },
        {
            type: 'checkbox',
            message: "Technologies used to create the project",
            choices: ["CSS", "Bootstrap", "HTML", "Javascript", "React"],
            name: 'BuildWith',



        },
        {
            type: 'list',
            message: "Provide the license used in this application",
            choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
            name: 'License',



        },
        {
            type: 'input',
            message: "What was the year of creation?",
            name: 'Year',



        },
        {
            type: 'input',
            message: "What is the name of the creator?",
            name: 'creatorName',



        }];

// {
//     type: 'input',
//         message: "What is the name of the creator?",
//             name: 'creatorName',



// }
function renderLicenseBadge(license) {
if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
if (license === "Apache2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
if (license === "GPL3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
if (license === "BSD3"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}
if (license === "None"){
    return ""
}


}
function writeReadMeFile() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            fs.writeFile("README.md", createReadme(data), (err) =>
                err ? console.log(err) : console.log("Enjoy your README"))
        });
};

function createReadme(data) {
    return ` ## ${data.name}



## Table Of Contents:
* [Description Of Functionality](#Description)

* [Link To Deployed Application](#Link)

* [ScreenShot of Deployed Application](#ScreenShot)

* [Link To Deployed Application](#Link)

* [Built With](#Built)

* [License](#License)

* [Creator](#Creator)




## Description Of Functionality:
${data.description}

## Link To Deployed Application:

Link:  ${data.linktodeployedapplication}


## ScreenShot of Deployed Application:

Link: ${data.Screenshot}

## Built With:
-${data.BuildWith[0]}
-${data.BuildWith[1]}
-${data.BuildWith[2]}
-${data.BuildWith[3]}
-${data.BuildWith[4]}



## License:
This Project is licensed under: ${renderLicenseBadge(data.License)}

Copyright (c) ${data.Year} ${data.creatorName}


## Creator:
${data.creatorName}



`
}
writeReadMeFile();