let optionsList = ["this", "is", "a", "test"];
let chosenList = [];

let optionsL = document.querySelector ('#options');

for(let el of optionsList){
    console.log(el);
    let li = document.createElement('li');
    li.textContent = el;
    optionsL.append(li);
  }

let chosenL = document.querySelector ('#chosen');

for(let el of chosenList){
    console.log(el);
    let li = document.createElement('li');
    li.textContent = el;
    chosenL.append(li);
  }

  let addButt = document.querySelector('addButton');
  let removeButt = document.querySelector('removeButton');

  addButt.onclick = () => {
    
  }