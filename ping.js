let input = document.querySelector(".mail");

let error = document.querySelector(".error")
let form = document.querySelector(".form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();             
    validateEmail();
})

function validateEmail() {

    let inputValue = input.value.trim();
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(inputValue)) {
        setError(error, "Please provide a valid email address");
        inputValue.focus;
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