const task1 = document.createElement("div");
document.body.append(task1);
let button1 = document.createElement("button");
button1.innerText = "Click";
let redSquare = document.createElement("div");
task1.append(button1, redSquare);
redSquare.style.width = "200px";
redSquare.style.height = "200px";
redSquare.style.backgroundColor = "red";
redSquare.style.margin = "10px";

button1.addEventListener("click", function () {
  redSquare.style.backgroundColor = "green";
  redSquare.style.width = "100px";
  redSquare.style.height = "100px";
  redSquare.style.margin = "60px";
});

const task2 = document.createElement("div");
document.body.append(task2);
let button2 = document.createElement("button");
button2.innerText = "Click";
let pinkSquare = document.createElement("div");
task2.append(button2, pinkSquare);
pinkSquare.style.width = "200px";
pinkSquare.style.height = "200px";
pinkSquare.style.backgroundColor = "pink";
pinkSquare.style.margin = "10px";

button2.addEventListener("click", function () {
  pinkSquare.style.backgroundColor = "darkblue";
  console.log(pinkSquare.style.backgroundColor);
});

const task3 = document.createElement("div");
document.body.append(task3);
let button3 = document.createElement("button");
button3.innerText = "Click";
let greenSquare = document.createElement("div");
task3.append(button3, greenSquare);
greenSquare.style.width = "150px";
greenSquare.style.height = "150px";
greenSquare.style.backgroundColor = "darkgreen";
greenSquare.style.margin = "10px";

button3.addEventListener("click", function () {
  greenSquare.style.width = "170px";
  greenSquare.style.height = "170px";
});

const task4 = document.createElement("div");
task4.classList.add("root");
document.body.append(task4);
let button4 = document.createElement("button");
button4.innerText = "Click";
task4.append(button4);
let isBlue = true;

// button4.addEventListener("click", function(){
//     let pElem = document.createElement("p")
//     task4.append(pElem)
//     pElem.innerText = "Lorem"
//     pElem.style.color = "blue"
//     pElem.style.margin = "10px"
// })

button4.addEventListener("click", function () {
  let pElem = document.createElement("p");
  pElem.innerText = "Lorem";

  if (isBlue) {
    pElem.style.color = "blue";
    pElem.style.margin = "10px";
    isBlue = false;
  } else {
    pElem.style.color = "darkgreen";
    pElem.style.margin = "10px";
    isBlue = true;
  }

  task4.append(pElem);
});

const divCont = document.createElement("div");
document.body.append(divCont);
divCont.style.display = "flex";
divCont.style.gap = "5px";
divCont.style.flexWrap = "wrap";
divCont.style.paddingTop = "10px"

for (let blue = 0; blue <= 255; blue += 5) {
  let div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = `rgb(128, 128, ${blue})`;
  divCont.append(div);
}
