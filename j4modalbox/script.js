const btn = document.querySelector(".btn-contact");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
btn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});
close.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
