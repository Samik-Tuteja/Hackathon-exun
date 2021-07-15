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

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "samiktuteja2008@gmail.com",
    Password: "mriiklvjpdwksxiw",
    To: username.value,
    From: "samiktuteja2008@gmail.com",
    Subject: "Selicoin Password Change",
    Body: "Your password is exunclan",
  });
  alert("Please check your email");
}

document.querySelector("form").addEventListener("submit", function (event) {
  passwordError.textContent = "";
  usernameError.textContent = "";
  if (username.value.trim() === "") {
    usernameError.textContent = "Please fill the username";
    event.preventDefault();
  } else if (password.value.trim() === "") {
    passwordError.textContent = "Please fill the password";
    event.preventDefault();
  } else if (password.value !== "exunclan") {
    event.preventDefault();
    passwordError.textContent = "Wrong Password!";
  }
});
