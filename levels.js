let numberToReach = 0;
const numberToReachDiv = document.querySelector(".number-to-reach");

function randomNumberToReach() {
  numberToReach = Math.floor(Math.random() * 200);
  return numberToReach;
}

numberToReachDiv.innerHTML = `${randomNumberToReach()}`;
