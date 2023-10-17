"use strict";

const upbtn = document.querySelector(".btn-up");
const downbtn = document.querySelector(".btn-down");
const textdisplay = document.querySelector(".display");

let count = 0;
upbtn.addEventListener("click", function () {
  count++;
  textdisplay.textContent = count;
  if (count > 0) {
    textdisplay.style.color = "green";
  } else if (count < 0) {
    textdisplay.style.color = "red";
  } else {
    textdisplay.style.color = "blue";
  }
});
downbtn.addEventListener("click", function () {
  count--;
  textdisplay.textContent = count;
  if (count > 0) {
    textdisplay.style.color = "green";
  } else if (count < 0) {
    textdisplay.style.color = "red";
  } else {
    textdisplay.style.color = "blue";
  }
});
