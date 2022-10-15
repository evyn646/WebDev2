const express = require('express');
const app = express();
const port = 3000;
var session = require('express-session');

let people = [];
let posts = [];

app.use(session({
  secret: 'purple dog',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000}
}))

app.use(express.urlencoded({extended:false}));

app.use(`/page`, (req,res,next) => {
    console.log('middleware');
    if(req.session.currentUser){
        next();
        return;
    }
    htmlStart(res, 'no!');
    res.write('please login or register');
    res.write(`<a href = "/index.html"> <button> login/register </button> </a>`)
    htmlEnd(res);
});

app.get(`/page`, (req,res) => {
    console.log('special page');
    htmlStart(res, 'buttons');
    res.write(` <p> hello ${req.session.currentUser.firstName} </p>`);
    res.write(`<a href = "/posts"> <button> view posts </button></a>`);
    res.write(`<a href = "/profile.html"> <button> your profile </button></a>`);
    res.write(`<a href = "/logout"> <button> logout </button></a>`);

    htmlEnd(res);
});

app.post(`/profile`, (req,res) => {
    htmlStart(res, 'profile');
        var photo = req.body.photo;
        var comment = req.body.comment;
        var author = req.body.author;
        req.session.userPost = {photo: req.body.photo, comment: req.body.comment, 
            author: req.body.author};
        for (post of posts){
            posts.push(req.session.userPost);
        }
        res.redirect(`/profilePosts`);
    htmlEnd(res);
})

app.get(`/profilePosts`, (req,res) => {
    htmlStart(res, `my photos`);
    res.write(`${photo}`);
    res.write(`${comment}`);
    res.write(`${author}`);
    res.write(`<button onClick = "deleteFunc()"> delete </button>`);
    function deleteFunc(){
        photo.parentNode.removeChild(photo);
        comment.parentNode.removeChild(comment);
        author.parentNode.removeChild(author);
        }
    htmlEnd(res);
})

app.get(`/posts`, (req,res) => {
    console.log(`posts`);
    htmlStart(res, 'posts');
    res.write(` <p> hello ${req.session.currentUser.firstName} here are some posts... </p>`);
    res.write(`<p> author: Bob_876 <img width=300 length=300 src="https://www.infoplease.com/sites/infoplease.com/files/inline-images/NYC%20Skyline.jpg" 
        alt=""> <br> comment: wow, such a beautiful city!! </p>`);
    res.write(`<p> author: Kitten1234 <img width=300 length=300 src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Choco_chip_cookie.jpg" 
        alt=""> <br> comment: a cool picture &#127850 </p>`);
        res.write(`<li> ${posts.photo} ${posts.comment} ${posts.author} </li>`);
    htmlEnd(res);
})

app.get(`/logout`, (req,res) => {
    req.session.currentUser = undefined;
    res.redirect(`/index.html`);
    res.end();
})

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


app.post(`/login`, (req,res) => {

    htmlStart(res, `login`);
    for (person of people){
        if (req.body.username === person.username && req.body.password === person.password) 
        {
            req.session.currentUser = person;
            // currentUser=people[people.findIndex((p) => req.body.username === p.username && 
            // req.body.password === p.password)];
            res.redirect(`/page`);
            return;
        }
    }
    res.write('you are incorrect');
    res.write(`<a href = "/index.html"> <button> change </button> </a>`)
    htmlEnd(res);
    res.end();
});


app.post(`/register`, (req, res) => {
    console.log("Hello there:" +req.body.firstName);
    req.session.newUser = {firstName: req.body.firstName, lastName: req.body.lastName, 
        username: req.body.username, password: req.body.password};
    for (person of people){
        if(req.body.username === person.username){
            htmlStart(res, 'change');
            res.write('please enter a different username');
            res.write(`<a href = "/register.html"> <button> change </button></a>`);
            htmlEnd(res);
            return;
        }
    }
    people.push(req.session.newUser);
    console.log(people);
    req.session.currentUser = req.session.newUser;

    res.redirect(`/page`);

    console.log(`<ul>`);

    for (let person of people){
        console.log(`<li> ${person.firstName} ${person.lastName} ${person.username} ${person.password} <li>`);
    };
    console.log(`<ul`);

});

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});