function redirectHTML() {
  window.location.href = "tes.html";
}

// Hamburger menu
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("show");
  }
});

// Catch Data User
const scriptURL =
  "https://script.google.com/macros/s/AKfycby9srbt7vECeWaWPwOQ-G43vJh4udoQlWyUBLjQ-KMMBvcVaVqSHFzWKiF-FSqa3n4bOA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
