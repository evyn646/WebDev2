let optionsList = ["this", "is", "a", "test"];
let chosenList = ["hello"];

//options

let optionsL = document.querySelector ('#options');

for(let el of optionsList){
    console.log(el);
    let li = document.createElement('li');
    li.textContent = el;
    optionsL.append(li);
  }


function addOptionsItem(el){
    let li = document.createElement('li');
    li.textContent = el;
    optionsL.appendChild(li);
}

//move function

function moveTooptionsList(index){
   //   let optionsL = Array.from(document.querySelectorAll("#options"));
   //   let chosenL = Array.from(document.querySelectorAll("#chosen"));
      optionsList.push(chosenList[index]);
      addOptionsItem(chosenList[index]);
      chosenList.pop(index);
      let li = document.createElement('li');
      chosenL.appendChild(li);
      optionsL.appendChild(li);
    }

//chosen


let chosenL = document.querySelector ('#chosen');

for(let el of chosenList){
  console.log(el);
  let li = document.createElement('li');
  li.textContent = el;
  chosenL.append(li);
}

function addChosenItem(el){
    let li = document.createElement('li');
    li.textContent = el;
    chosenL.appendChild(li);
}

//move function

   function moveTochosenList(index){
    //let chosenL = Array.from(document.querySelectorAll("#chosen"));
    //let optionsL = Array.from(document.querySelectorAll("#options"));
    chosenList.push(optionsList[index]);
    addChosenItem(optionsList[index]);
    optionsList.pop(index);
    let li = document.createElement('li');
    optionsL.appendChild(li);
    chosenL.appendChild(li);
  }

//add and remove button actions

  let addButt = document.querySelector('#addButton');
  let removeButt = document.querySelector('#removeButton');

  // document.getElementById("addButton").addEventListener("click", moveTochosenList(1));

  addButt.onclick = () => {
    moveTochosenList(index);

  }

  removeButt.onclick = () => {
    moveTooptionsList(index);

  }

  let isSelected = [];

// highlighting

  for(let el of document.querySelectorAll("#options li")) {
    el.onclick = () => {
      isSelected.push(false);
      let allItems = Array.from(document.querySelectorAll("#options li"));
      let index = allItems.indexOf(el);

      isSelected[index] = !isSelected[index];

      if (isSelected([])){
        el.getElementsByClassName.backgroundColor = "blue";
      }

      else {
        el.getElementsByClassName.backgroundColor = "green";
      }
    console.log("clicked");
    }

  }

  // let ab = document.createElement('li');

  // ArrayList<Item> optionsL;
  // ArrayList<Item> chosenL;

  // let ab = listI 
  // listI = new li();
  // chosenL.add(listI);





