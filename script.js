let emailForm = document.getElementById("email-form");
let emailField = document.getElementById("email-field");
let errorMessage = document.getElementById("error-message");
let thankYouMessage = document.getElementById("thank-you-message");
let mainImage = document.getElementById("graphs");

let smallerScreen = window.matchMedia("(max-width: 599px)");

function validateEmail(inputText) {
  let validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputText.value.match(validEmailFormat)) {
    emailField.style.borderColor = "var(--paleblue)";
    errorMessage.style.display = "none";
    thankYouMessage.style.display = "flex";
    thankYouMessage.innerText = "Thank you for your interest in our services! You will get a notification when PING. launches."
    emailField.blur();
    emailForm.reset();
    emailField.addEventListener("focus", () => {
      thankYouMessage.style.display = "none";
    });
    return true;
  } else if(inputText.value === "") {
    emailField.style.borderColor = "var(--lightred)";
    errorMessage.style.display = "flex";
    errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
    thankYouMessage.style.display = "none";
    if (smallerScreen.matches) {
      mainImage.style.marginTop = "2.5rem";
      }
    return false;
  } else {
    emailField.style.borderColor = "var(--lightred)";
    errorMessage.style.display = "flex";
    errorMessage.innerText = "Please provide a valid email address";
    thankYouMessage.style.display = "none";
    if (smallerScreen.matches) {
      mainImage.style.marginTop = "2.5rem";
    }
    return false;
  }
}