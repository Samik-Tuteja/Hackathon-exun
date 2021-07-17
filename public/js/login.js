const header = document.querySelector(".navbar");
const username = document.querySelector(".username");
const password = document.querySelector(".pass");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const showPassBtn = document.querySelector(".showpass-btn");
const iBtn = document.querySelector(".fa-eye-slash");
const forgotPassword = document.querySelector(".forgot-password");
var numClicks = 0;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

function hiddenPass() {
  numClicks++;
  if (numClicks % 2 === 0) {
    password.type = "text";
    iBtn.classList = "fa fa-eye";
  } else {
    password.type = "password";
    iBtn.classList = "fa fa-eye-slash";
  }
}

forgotPassword.addEventListener("click", function (event) {
  event.preventDefault();
  fetch("/ok")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        if (username.value === data[i].email) {
          const dataPassword = data[i].password;
          console.log(dataPassword);
          Email.send({
            Host: "smtp.gmail.com",
            Username: "samiktuteja2008@gmail.com",
            Password: "mriiklvjpdwksxiw",
            To: username.value,
            From: "samiktuteja2008@gmail.com",
            Subject: "Selicoin Password Change",
            Body: `Your password is ${dataPassword}`,
          });
          alert("Please check your email");
        }
      }
      document
        .querySelector("form")
        .addEventListener("submit", function (event) {
          usernameError.textContent = "";
          usernameError.textContent = "";
          if (username.value.trim() === "") {
            usernameError.textContent = "Please fill the username";
            event.preventDefault();
          } else if (password.value.trim() === "") {
            passwordError.textContent = "Please fill the password";
            event.preventDefault();
          } else if (password.value !== dataPassword) {
            event.preventDefault();
            passwordError.textContent = "Wrong Password!";
          }
        });
    });
});

function passClick() {
  numClicks++;
  if (numClicks % 2 === 0) {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
