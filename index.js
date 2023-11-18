"use strict";
let score = 20 - 1;
let min = 1;
let secretnumber = Math.trunc(Math.random() * 29) + 1;
console.log(secretnumber);
function displayMassage(massage) {
  document.querySelector(`.startguessing`).textContent = massage;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  let inputnumber = Number(document.querySelector(`.inputnumber`).value);

  if (!inputnumber) {
    displayMassage(`Forbidden Number`);
  }

  if (inputnumber == secretnumber) {
    displayMassage(`congratulations`);
    document.querySelector(`.secretnumber`).textContent = ` ${secretnumber}`;
    document.querySelector(`.highscore`).textContent = `${secretnumber}`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.guessmynumber`).textContent = `MTN:123456789`;
  } else if (inputnumber > secretnumber) {
    displayMassage(`Too hight`);
    document.querySelector(`.score`).textContent = `${score--}`;
  } else if (inputnumber < secretnumber) {
    displayMassage(`Too low`);
    document.querySelector(`.score`).textContent = `${score--}`;
  }
  if (score < 1) {
    document.querySelector(`.score`).textContent = `0`;
    displayMassage(`You lost the game`);
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  displayMassage(`start guessing`)
  document.querySelector(`.score`).textContent = `20`;
  document.querySelector(`body`).style.backgroundColor = ` rgb(2, 2, 39)`;
  document.querySelector(`.secretnumber`).textContent = `?`;
  document.querySelector(
    `.guessmynumber`
  ).textContent = `Guess My birth month,win airtime`;
  secretnumber = Math.trunc(Math.random() * 29) + 1;
  console.log(secretnumber);
});
