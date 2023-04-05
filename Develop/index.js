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

function writeReadMeFile() {
    inquirer
        .prompt{
        type: 'input',
            message: "what is your name?",
                name: 'name',



}
    {
        type: 'input',
            message: "what is your location?",
                name: 'location',



}
    {
        type: 'input',
            message: "write me a bio a bio about yourself",
                name: 'bio',



}
    {
        type: 'input',
            message: "what is your linkedin URl?",
                name: 'linkedin',



}
    {
        type: 'input',
            message: "what is your Github URL",
                name: 'github',



}

.then((data) => {
                    fs.writeFile('README.md', createReadme(data), (err) =>
                        err ? console.log(err) : console.log('enjoy your README!'))


                });






};

function createReadme(data) {
return `
${nameOFApplication}



## Table Of Contents:
-${}
-${}
-${}
-${}
-${}
-${}

## Description Of Functionality:
${}

## link To Deployed Application:

link:  ${}


## ScreenShot of Deployed Application:

Link: ${}

## Built With:
-${}
-${}
-${}
-${}
-${}


## license:

${}

Copyright (c) ${yearOfCreation} ${creatorName}


## Creator:
${creatorName}



`
    writeReadMeFile();