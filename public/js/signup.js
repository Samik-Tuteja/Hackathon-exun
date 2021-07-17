const header = document.querySelector(".navbar");
const username = document.querySelector(".username");
const password = document.querySelector(".pass");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const resetPass = document.querySelector(".reset-pass");
const resetPassError = document.querySelector(".reset-password-error");
const mailError = document.querySelector(".email-error");
const mail = document.querySelector(".emailOp");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    passwordError.textContent = "";
    usernameError.textContent = "";
    resetPassError.textContent = "";
    mailError.textContent = "";
    if (username.value.trim() === "") {
      usernameError.textContent = "Please fill the username";
      event.preventDefault();
    } else if (password.value.trim() === "") {
      passwordError.textContent = "Please fill the password";
      event.preventDefault();
    } else if (resetPass.value.trim() === "") {
      resetPassError.textContent = "Please fill the password";
      event.preventDefault();
    } else if (resetPass.value !== password.value) {
      resetPassError.textContent = "Passwords do not maatch";
      event.preventDefault();
    } else if (mail.value.trim() === "") {
      mailError.textContent = "Please enter a valid email";
      event.preventDefault();
    }
  });
