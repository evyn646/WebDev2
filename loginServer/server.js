const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var session = require('express-session');

fs.readFileSync('/registerData.json', 'utf8', (error, data) => {
    if(error){
       console.log(error);
       return;
    }
    console.log(JSON.parse(data));

})

fs.readFileSync('/postsData.json', 'utf8', (error, data) => {
    if(error){
       console.log(error);
       return;
    }
    console.log(JSON.parse(data));

})

let people = [];
let posts = [{author: "Bob_876" , photo: "https://www.infoplease.com/sites/infoplease.com/files/inline-images/NYC%20Skyline.jpg", 
comment: "wow, such a beautiful city!!" }, {author: "Yellow1234" , photo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Choco_chip_cookie.jpg", 
comment: "a cool picture &#127850" }];

app.use(session({
  secret: 'purple dog',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000}
}))

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

app.use(`/profile`, (req,res,next) => {
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

app.post(`/profile`, (req,res) => {
    htmlStart(res, 'profile');
        req.session.userPost = {photo: req.body.photo, comment: req.body.comment, 
            author: req.body.author};
        for (let post of posts){
            posts.push(req.session.userPost);
        }
        res.write(`${req.body.photo} <br>`);
        res.write(`${req.body.comment} <br>`);
        res.write(`${req.body.author} <br>`);
        res.write(`<a href = "/delete"> <button> delete </button> </a>`);
        console.log(posts);
    htmlEnd(res);
})

app.get(`/delete`, (req,res) => {
    req.body.photo.parentNode.removeChild(req.body.photo);
    req.body.comment.parentNode.removeChild(req.body.comment);
    req.body.author.parentNode.removeChild(req.body.author);
    //splice
    res.end();
})

app.use(`/posts`, (req,res,next) => {
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

app.get(`/posts`, (req,res) => {
    htmlStart(res, 'posts');
    //res.write(posts);
    htmlEnd(res);
})

// app.get(`/posts`, (req,res) => {
//     htmlStart(res, 'posts');
//     res.write(` <p> hello ${req.session.currentUser.firstName} here are some posts... </p>`);
//     res.write(`<p> author: Bob_876 <br> <img width=300 length=300 src="https://www.infoplease.com/sites/infoplease.com/files/inline-images/NYC%20Skyline.jpg" 
//         alt=""> <br> comment: wow, such a beautiful city!! </p>`);
//     res.write(`<p> author: Kitten1234 <br> <img width=300 length=300 src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Choco_chip_cookie.jpg" 
//         alt=""> <br> comment: a cool picture &#127850 </p>`);
//         for (let post of posts){
//             if (post >= 1){
//             res.write(`${posts.photo} ${posts.comment} ${posts.author}`);
//             }
//         }
//     htmlEnd(res);
// })

app.get(`/logout`, (req,res) => {
    req.session.currentUser = undefined;
    res.redirect(`/index.html`);
    res.end();
})

app.use(express.static('public'));

app.post(`/login`, (req,res) => {

    htmlStart(res, 'tologin');
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
    res.write('you are incorrect <br>');
    res.write(`<a href = "/index.html"> <button> change </button> </a>`);
    htmlEnd(res);
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
    res.end();

});

//promises

function slowCallback(result, callback) {
    setTimeout(() => { 
        console.log("Callback finished: " + result);
        callback(result);
    }, 1000*Math.random()+500);
}

// slowCallback(100, res => {
//     slowCallback(5, res2 => {
//         slowCallback(7, res3 => {
//             console.log(res*res2*res3);
//         });
//     });
// });

// promise  resolved (gets a value)    rejected (error)

// let resolver;
// let rejector;

// let p = new Promise((resolve, reject) => {
//     resolver = resolve;
//     rejector = reject;
// });

// p
//   .then(value => { console.log("I got: " + value); })
//   .catch(err =>  { console.log("I got an error: " + err); });

// rejector("Booo");
//resolver(777);

function slowPromise(result) {
    return new Promise((resolve, reject) => {
        slowCallback(result, res => {
            if (Math.random() > 0.8) {
                reject("Something baaad happened!!!");
            }
            resolve(res);
        })
    })
}

// slowPromise(888)
// .then(result => { return slowPromise(result + 223); })
// .then(result => { return slowPromise(result + 13); })
// .then(result => { return slowPromise(result + 243); })
// .then(result => { return slowPromise(result + 2113); })
// .then(final  => { console.log("Final result: " + final); })
// .catch(err => {
//     console.log("Got an error: " + err);
// }) 

// Promise.all([slowPromise(332), slowPromise(11), slowPromise(13)])
//    .then(result => {
//     console.log("Result: " + result);
//    })
//    .catch(err => {
//     console.log("ERROR: " + err);
//    })

app.get("/whatever", async (req, res) => {
    // free to use await here
});

async function dostuff() {
    try {
        let a = await slowPromise(7);
        let b = await slowPromise(32);
        let c = await slowPromise(44);
        console.log(a + b + c);
    }
    catch (err) {
        console.log(err);
    }
}

dostuff();

console.log("Goodbye");

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});