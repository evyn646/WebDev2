let data = ["this", "is", "a", "test"];
let body = document.querySelector('body');


for(let el of data){
  console.log(el);
  let x = document.createElement('p');
  x.textContent = "hello";
  body.append(x);
}
