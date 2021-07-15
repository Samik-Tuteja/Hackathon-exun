const header = document.querySelector(".navbar");
const username = document.querySelector(".username");
const password = document.querySelector(".pass");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  passwordError.textContent = "";
  usernameError.textContent = "";
  if (username.value.trim() === "") {
    usernameError.textContent = "Please fill the username";
    event.preventDefault();
  } else if (password.value.trim() === "") {
    passwordError.textContent = "Please fill the password";
    event.preventDefault();
  }
});
