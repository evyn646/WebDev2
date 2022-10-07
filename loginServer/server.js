const express = require('express');
const app = express();
const port = 3000;



let people = [
    {firstName: "bob", lastName: "jones", username: "bobj", password: "bobby"},
    {firstName: "bill", lastName: "james", username: "billj", password: "billy"}
];

let newUser;
let currentUser;

app.use(express.urlencoded({extended:false}));

app.use(`/page.html`, (req,res,next) => {
    console.log('middleware');
    if(currentUser){
        next();
        return;
    }
    res.write('No!');
    res.end();
});

app.use(express.static('public'));

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


// app.get(`/person/:blarg`, (req,res) => {
//     console.log(req.params);
//     res.send("hi:" + req.params.blarg);
// });



// app.post(`/page`, (req,res) => {
//     console.log("welcome to special page");
//     if(currentUser);
//     htmlStart(res, "Document");
//     res.write(` <p> hello ${currentUser.firstName} </p>`);
//     htmlEnd(res);
//     res.end();
// });


app.post(`/login`, (req,res) => {

    for (person of people){
        if (req.body.username === person.username && req.body.password === person.password) 
        {
            currentUser = person;
            // currentUser=people[people.findIndex((p) => req.body.username === p.username && 
            // req.body.password === p.password)];
            res.redirect(`/page.html`);
            return;
        }
    }
    res.write('you are incorrect');
    res.end();
});


app.post(`/register`, (req, res) => {
    console.log("Hello there:" +req.body.firstName);
    newUser = {firstName: req.body.firstName, lastName: req.body.lastName, 
        username: req.body.username, password: req.body.password};
    for (person of people){
        if(req.body.username === person.username){
            res.write('please enter a different username');
            res.end();
            return;
        }
    }
    people.push(newUser);
    console.log(people);
    currentUser = newUser;

    res.redirect(`/page.html`);

    console.log(`<ul>`);

    for (let person of people){
        console.log(`<li> ${person.firstName} ${person.lastName} ${person.username} ${person.password} <li>`)
    };
    console.log(`<ul`);

});

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});