const header = document.querySelector(".navbar");
const namePerson = document.querySelector(".section-4-div-2-input-name");
const emailPerson = document.querySelector(".section-4-div-2-input-email");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const textArea = document.querySelector(".text-area");
const textAreaError = document.querySelector(".textarea-error");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  emailError.textContent = "";
  nameError.textContent = "";
  textArea.textContent = "";
  if (namePerson.value.trim() === "") {
    event.preventDefault();
    nameError.textContent = "Please fill your name";
  } else if (emailPerson.value.trim() === "") {
    event.preventDefault();
    emailError.textContent = "Please fill your email";
  } else if (textArea.value.trim() === "") {
    event.preventDefault();
    textAreaError.textContent = "Please type your message";
  }
});
