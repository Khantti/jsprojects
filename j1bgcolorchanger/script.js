"use strict";
// let color = [
//   "white",
//   "pink",
//   "tomato",
//   "blue",
//   "yellow",
//   "green",
//   "grey",
//   "black",
// ];

const bgcolor = document.querySelector("body");
const btnclick = document.querySelector(".btn");
function randomColor(max) {
  return Math.trunc(Math.random() * max) + 1;
}
btnclick.addEventListener("click", function () {
  // let rand = Math.trunc(Math.random() * 8) + 1;
  let red = randomColor(255);
  let green = randomColor(255);
  let blue = randomColor(255);
  let color = `rgb(${red},${green},${blue})`;
  console.log(color);
  bgcolor.style.backgroundColor = color;
});
console.log(window);
