"use strict";
let score = 20 - 1;
let secretnumber = Math.trunc(Math.random() * 29) + 1;
console.log(secretnumber);

document.querySelector(`.check`).addEventListener(`click`, function () {
  let inputnumber = Number(document.querySelector(`.inputnumber`).value);
  inputnumber = document.querySelector(`.inputnumber`).value;
  // console.log(inputnumber);

  if (!inputnumber) {
    console.log(inputnumber);
    // document.querySelector(`.startguessing`).textContent = `not a number`;
  }

  if (inputnumber == secretnumber) {
    document.querySelector(`.startguessing`).textContent = ` congratulations`;
    document.querySelector(`.secretnumber`).textContent = ` ${secretnumber}`;
    document.querySelector(`.highscore`).textContent = `${secretnumber}`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.guessmynumber`).textContent = `MTN:123456789`;
  } else if (inputnumber > secretnumber) {
    document.querySelector(`.startguessing`).textContent = `Too hight`;
    document.querySelector(`.score`).textContent = `${score--}`;
  } else if (inputnumber < secretnumber) {
    document.querySelector(`.startguessing`).textContent = `Too low`;
    document.querySelector(`.score`).textContent = `${score--}`;
  }
  if (score < 1) {
    document.querySelector(`.score`).textContent = `0`;
    document.querySelector(`.startguessing`).textContent = `Game over`;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.startguessing`).textContent = `start guessing`;
  document.querySelector(`.score`).textContent = `20`;
  document.querySelector(`body`).style.backgroundColor = ` rgb(2, 2, 39)`;
  document.querySelector(`.secretnumber`).textContent = `?`;
  document.querySelector(
    `.guessmynumber`
  ).textContent = `Guess My birth month,win airtime`;
  secretnumber = Math.trunc(Math.random() * 29) + 1;
  console.log(secretnumber);
});
