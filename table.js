let numbers = [];
const container = document.querySelector(".container");

randomNumbers();
//function that generates random numbers of the table
function randomNumbers() {
  for (let i = 0; i < 9; i++) {
    numbers.push(Math.floor(Math.random() * (10 - 1)) + 1);
  }
  map();
  return numbers;
}
//used for number replacement
function randomNumber() {
  let number = Math.floor(Math.random() * (10 - 1)) + 1;
  return number;
}

function map() {
  //array map => list inner html
  numbers.forEach((item, index) => {
    // document.querySelector(".container").innerHTML = ``;
    container.innerHTML += `
        <div ondragover="allowDrop(event)" draggable="true" key="${index}" class="number">${item}</div>
        `;
  });
  //select all tiles of the table
  let tiles = document.querySelectorAll(".number");

  //for each element add drag events methods
  tiles.forEach((element, index) => {
    element.addEventListener(
      "dragstart",
      e => dragStart(e.target, index),
      false
    );
    element.addEventListener("dragend", e => dragEnd(e.target), false);
    element.addEventListener(
      "dragenter",
      e => dragOver(e.target, index),
      false
    );
  });
}

let value = [];
let keys = [];

const dragStart = (e, key) => {
  value[0] = e.innerHTML;
  keys[0] = key;

  e.style.opacity = 0.35;
  e.style.animation = "bounce 5s 100";
  e.style.border = "solid red 0.5rem";
};

const dragOver = (e, key) => {
  keys[1] = key;
  value[1] = e.innerHTML;
};

const dragEnd = e => {
  //calc
  const finalValue = value.reduce((a, b) => parseInt(a) + parseInt(b));
  //final value assign
  if (keys[0] !== keys[1]) {
    numbers[keys[1]] = finalValue;
    numbers[keys[0]] = randomNumber();
  }
  //array reset
  container.innerHTML = ``;
  map();
};

function allowDrop(e) {
  e.preventDefault();
}
