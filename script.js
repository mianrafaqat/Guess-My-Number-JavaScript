"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtn = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
