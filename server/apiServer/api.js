const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

function htmlStart(res, title){
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${title} </title>
    </head>
    <body>`);
};

function htmlEnd(res){
    res.write(`</body>
    </html>`);
    res.end();
};

let fRes = await fetch(`https://data.cdc.gov/resource/bi63-dtpu.json?state=${state}`);
    let data = await fRes.json();
    for (let death of data.results){
        res.write(`<h1> ${death.name} </h1>`);
    }
    htmlEnd(res);

let daTa = [
{age: 65, ageMax:150,  state: "Mississippi", death: "heart disease", rank: "1"},
{age: 65, ageMax:150,  state: "Alabama", death: "heart disease", rank: "2"},
{age: 65, ageMax:150,  state: "Oklahoma", death: "heart disease", rank: "3"},
{age: 65, ageMax:150,  state: "Kentucky", death: "heart disease", rank: "4"},
{age: 65, ageMax:150,  state: "Louisiana", death: "heart disease", rank: "5"},
{age: 45, ageMax:55, state: "Kentucky", death: "cancer", rank: "1"},
{age: 45, ageMax:55, state: "Tennessee", death: "cancer", rank: "2"},
{age: 45, ageMax:55, state: "Louisiana", death: "cancer", rank: "3"},
{age: 45, ageMax:55, state: "Mississippi", death: "cancer", rank: "4"},
{age: 45, ageMax:55, state: "Arkansas", death: "cancer", rank: "5"},
{age: 85, ageMax:150,  state: "Alabama", death: "stroke", rank: "1"},
{age: 85, ageMax:150,  state: "Tennessee", death: "stroke", rank: "2"},
{age: 85, ageMax:150,  state: "Arkansas", death: "stroke", rank: "3"},
{age: 85, ageMax:150,  state: "Oklahoma", death: "stroke", rank: "4"},
{age: 85, ageMax:150,  state: "South Carolina", death: "stroke", rank: "5"},
{age: 60, ageMax:150,  state: "Oklahoma", death: "chronic lower respiratory diseases", rank: "1"},
{age: 60, ageMax:150,  state: "Kentucky", death: "chronic lower respiratory diseases", rank: "2"},
{age: 60, ageMax:150,  state: "West Virginia", death: "chronic lower respiratory diseases", rank: "3"},
{age: 60, ageMax:150,  state: "Nevada", death: "chronic lower respiratory diseases", rank: "4"},
{age: 60, ageMax:150,  state: "Wyoming", death: "chronic lower respiratory diseases", rank: "5"},
{age: 15, ageMax:59, state: "Louisiana", death: "accidents/unintentional injuries", rank: "1"},
{age: 15, ageMax:59, state: "Mississippi", death: "accidents/unintentional injuries", rank: "2"},
{age: 15, ageMax:59, state: "New Mexico", death: "accidents/unintentional injuries", rank: "3"},
{age: 15, ageMax:59, state: "Wyoming", death: "accidents/unintentional injuries", rank: "4"},
{age: 15, ageMax:59, state: "Kentucky", death: "accidents/unintentional injuries", rank: "5"},
{age: 80, ageMax:150,  state: "Louisiana", death: "diabetes", rank: "1"},
{age: 80, ageMax:150,  state: "West Virginia", death: "diabetes", rank: "2"},
{age: 80, ageMax:150,  state: "Oklahoma", death: "diabetes", rank: "3"},
{age: 80, ageMax:150,  state: "New Mexico", death: "diabetes", rank: "4"},
{age: 80, ageMax:150,  state: "Tennessee", death: "diabetes", rank: "5"},
{age: 60, ageMax:75, state: "Tennessee", death: "alzheimer's", rank: "1"},
{age: 60, ageMax:75, state: "Washington", death: "alzheimer's", rank: "2"},
{age: 60, ageMax:75, state: "Louisiana", death: "alzheimer's", rank: "3"},
{age: 60, ageMax:75, state: "Alabama", death: "alzheimer's", rank: "4"},
{age: 60, ageMax:75, state: "South Carolina", death: "alzheimer's", rank: "5"},
{age: 60, ageMax:75, state: "Maine", death: "alzheimer's", rank: "10"},
];

app.get('/:state/:age', (req, res) => {
    //res.json(daTa[req.params.state, req.params.age]);
    for (let info of daTa) {
        console.log(info);
    }
})

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});

