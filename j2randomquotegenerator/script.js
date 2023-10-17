"use strict";

const display = document.querySelector(".display");
const btn = document.querySelector(".btn");

const quotes = [
  "“The best is yet to be.”",
  "“Try to be a rainbow in someone's cloud.”",
  "“Do good and good will come to you.”",
  "“A positive mindset brings positive things.”",
  "“Positivity always wins.”",
  "“When things go wrong, don't go with them.”",
  "“Live life to the fullest and focus on the positive.”",
  "“Keep looking up.”",
];

btn.addEventListener("click", function () {
  const random = Math.trunc(Math.random() * 8);
  //   console.log(random);
  display.textContent = quotes[random];
});
