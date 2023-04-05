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
            message: "What is the project title?",
                name: 'name',



}

    {
        type: 'input',
            message: "Write a description of functionality",
                name: 'description',



}
    
    {
        type: 'input',
            message: "Provide a link to the deployed application",
                name: 'link to deployed application',



}
    {
        type: 'input',
            message: "Provide a screen shot of deployed application",
                name: 'Screenshot',



}{
        type: 'choices',
            message: "Technologies used to create the project",
                name: 'tableOFContents',



}
    {
        type: 'input',
            message: "Provide the license used in this application",
                name: 'License',



}
{
    type: 'input',
        message: "What was the year of creation?",
            name: 'Year',



}
{
    type: 'input',
        message: "What is the name of the creator?",
            name: 'creatorName',



}
{
    type: 'input',
        message: "What is the name of the creator?",
            name: 'creatorName',



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

Link:  ${}


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