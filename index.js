const form = document.getElementById("form")
const email = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage")
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

const home = document.querySelector("#home")
const success = document.querySelector("#success")
const sentTo = document.getElementById("sentTo")

function suscribe(event) {
    let formValidation = document.forms["form"]["email"].value;
    if (formValidation == "" || !formValidation.match(emailFormat)) {
        email.style.borderColor= "#ff6257"
        email.style.backgroundColor= "hsla(4, 100%, 67%, 15%)"
        errorMessage.style.visibility="visible";
        email.style.color = "#ff6257"
        event.preventDefault()
    
        form.addEventListener("click", function () {
            errorMessage.style.visibility= "hidden";
            email.style.backgroundColor= ""
            email.style.borderColor = ""
            email.style.color = ""
        });
    } else {
        event.preventDefault()
        success.classList.remove("hidden")
        home.style.display= "none" 
        sentTo.textContent = formValidation
    }
}

function dismiss() {
    success.classList.add("hidden")
    home.style.display= "flex"
    email.value = ""
}
