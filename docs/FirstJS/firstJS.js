alert('\uD83C\uDFB1');

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Magic 8-Ball';
const myText = document.querySelector('p');
myText.textContent = 'Please click on a box color and your fortune will appear';

// document.querySelector('#red').addEventListener('click', () => {
//     alert('you will have a good day');
// })

// document.querySelector('#yellow').addEventListener('click', () => {
//     alert('you will have a bad day');
// })

// document.querySelector('#green').addEventListener('click', () => {
//     alert('you will be suprised');
// })

// document.querySelector('#blue').addEventListener('click', () => {
//     alert('you will be tired');
// })

const myBox = document.querySelector('#red p');

myBox.onclick = () => {
    console.log(myBox);
    myBox=document.querySelector('p');
    myBox.classList.add('fortune');
    // const myFortune = myBox.getAttribute('src');
    // if (myBox === '#red'){
    //     myBox.setAttribute('src','.red');
    // } else{
    //     myBox.setAttribute('src','#red');
    // }
}


