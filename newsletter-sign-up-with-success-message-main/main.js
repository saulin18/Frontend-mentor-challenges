const signUpForm = document.querySelector(".sign-up-form");
const signUpFormEmail = document.querySelector(".sign-up-form-content-form-input");
const errorMessage = document.querySelector(".sign-up-form-content-form-input-error-message");
const form = document.querySelector(".sign-up-form-content-form");
const dismissButton = document.querySelector(".success-message button");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    if(signUpFormEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        signUpForm.classList.add("success-message");
        signUpFormEmail.value = "";
        signUpFormEmail.classList.remove("sign-up-form-content-form-input-error");
    } else {
        signUpFormEmail.classList.add("sign-up-form-content-form-input-error");
    }
});


dismissButton.addEventListener("click", () => {
    signUpForm.classList.remove("success-message");
    signUpFormEmail.classList.remove("sign-up-form-content-form-input-error");
});







