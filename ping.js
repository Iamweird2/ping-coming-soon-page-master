let input = document.querySelector("#mail");

let error = document.querySelector(".error")
let form = document.querySelector(".form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();             
    validateEmail();
})

function validateEmail(){
    let inputValue = input.value.trim();
    if(inputValue === ""){
        setError(error, "Email cannot be empty");
    }else if(inputValue.indexOf("@") < 1){
        setError(error, "Please provide a valid email address");
    }else if(inputValue.indexOf(".") <= inputValue.indexOf("@") + 2){
        setError(error, "Please provide a valid email address");
    }else if(inputValue.indexOf(".") === inputValue.lenght-1){
        setError(error, "Please provide a valid email address")
    }else{
        setSuccess(error);
    }
}

function setError(element, message){
    let holder = element.parentElement;
    let errorHold = holder.querySelector(".error");

    errorHold.innerText = message;

    holder.classList.remove("success");
    holder.classList.add("errors");
}

function setSuccess(element){
    let holder = element.parentElement;
    let errorHold = holder.querySelector(".error");

    errorHold.innerText = "";
    holder.classList.remove("errors");
    holder.classList.add("success");
    
}