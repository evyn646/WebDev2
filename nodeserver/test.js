const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let people = [
    {firstName: "bob", lastName: "jones"},
    {firstName: "bill", lastName: "james"}
];

app.use(express.urlencoded({extended:false}));

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

app.get(`/`, (req, res) => {
    console.log("Hello there:" +req.body.firstName);
    htmlStart(res, "Document");
    res.write(` <p> hello ${req.body.lastName} , ${req.body.firstName} </p>`);
    htmlEnd(res);
    
});

app.get(`/person/:blarg`, (req,res) => {
    console.log(req.params);
    res.send("hi:" + req.params.blarg);
});

app.post(`/`, (req, res) => {
    console.log("Hello there:" +req.body.firstName);
    people.push({firstName: req.body.firstName, lastName: req.body.lastName});
    htmlStart(res, "Document");

       res.write(` <p> hello ${req.body.firstName} ${req.body.lastName}</p>`);
      
    
        // for(let i=0; i< people.length; i++ ){
        //    res.write( people[i].firstName + " " + people[i].lastName + "<br>");
        // };

       res.write(`<ul>`); 
       for(let person of people){
            res.write(`<li> ${person.firstName} ${person.lastName} </li>`)
       };
       res.write(`</ul>`); 
       
    htmlEnd(res);
    
});

app.listen(port, () => {
    console.log(`im listening (on port ${port})`)
});