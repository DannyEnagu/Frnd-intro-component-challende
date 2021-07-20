/*----------------------------------
  Javascript:
  Intro Component With Signup Form
  ----------------------------------*/

// Here we get the HTML DOM Nodes  for the form itself 
// input boxes, as well as the all elements into which we will place the error message.
const form = document.querySelector('form');
const fName= document.querySelector('#first_name');
const lName= document.querySelector('#last_name');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const errorIcon = document.querySelectorAll('#err-icon');
const inputError = document.querySelectorAll('#err-msg');

// the form default validity is false..
let isFormValid = false;
let isvalidationOn = false;

// array of inputs
const inputs = [
    fName,
    lName,
    email,
    password
];
  // Each time the user types something in the input boxes, we check if the
  // form fields are valid.
inputs.forEach( (input) => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});


form.addEventListener('submit', (e) => {
    // first we prevent the form from being sent by canceling the event
    e.preventDefault()
    
    isvalidationOn = true;
 // if the input fields are valid, we let the form submit..
    if(isFormValid){
        // Clear the Page when the form submited and
        // display the thank you message.  
        document.querySelector('#page-wrapper').remove();
        // unhide the thank you message..
        document.querySelector('#thank-you').classList.remove('hidden');
    }else{
// If it isn't, we display an appropriate error message
        validateInputs();
    }

});

const resetInput = (elm) => {
    elm.classList.remove("invalid");
}

const invalidateInput = (elm) => {
    elm.classList.add("invalid");
}

function validateInputs(){

    if(!isvalidationOn) return;
    isFormValid = true;
   
    // Validate first name
    if(!fName.value){
    // If the field is empty,
    // display the following error message and notice.
        errorIcon[0].classList.remove("hidden");
        inputError[0].classList.remove("hidden");
        inputError[0].textContent = `${fName.name} cannot be empty!`;
        invalidateInput(fName);
// And set form validity to false, so that form is not submitted.
        isFormValid = false;
    }else{
    //  if it isn't 
    // display the following error message and notice. 
    errorIcon[0].classList.add("hidden");
    inputError[0].classList.add("hidden");
    resetInput(fName);
    }

// Validate last name
    if(!lName.value){
        errorIcon[1].classList.remove("hidden");
        inputError[1].classList.remove("hidden");
        inputError[1].textContent = `${lName.name} cannot be empty!`;
        invalidateInput(lName);

        isFormValid = false;
    }else{
        resetInput(lName);
        errorIcon[1].classList.add("hidden");
        inputError[1].classList.add("hidden");
    }
// Validate email
    if(!email.value){
        errorIcon[2].classList.remove("hidden");
        inputError[2].classList.remove("hidden");
        inputError[2].textContent = `${email.name} cannot be empty!`;
        invalidateInput(email);

        isFormValid = false;

    }else if(email.validity.typeMismatch){
        errorIcon[2].classList.remove("hidden");
        inputError[2].classList.remove("hidden");
        inputError[2].textContent = `${email.name} Looks like this is not an email!`;
        invalidateInput(email);
        
        isFormValid = false;
    }else{
        resetInput(email);
        errorIcon[2].classList.add("hidden");
        inputError[2].classList.add("hidden");
    }

        // Validate password
    if(!password.value){
        errorIcon[3].classList.remove("hidden");
        inputError[3].classList.remove("hidden");
        inputError[3].textContent = `${password.name} cannot be empty!`;
        invalidateInput(password);

        isFormValid = false;
    }else{
        errorIcon[3].classList.add("hidden");
        inputError[3].classList.add("hidden");
        resetInput(password);
    }
}



























/*
let isFormValid = false;

const inputs = [
    fName,
    lName,
];











const resetElm = (elm) => {
    elm.classList.remove("invalid");
}

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
}






inputs.forEach(input => {
    input.addEventListener('input', ()=> {

        if(fName.value){
            resetElm(fName);
            resetElm(lName);
            inputError.classList.add("hidden");
            errorIcon.classList.add("hidden");
        }else{
    
            validateInputs();
        }
    })
})

const validateInputs = ()=>{
    
    isFormValid = true;

    if(!fName.value){
        errorIcon.classList.remove("hidden");
        inputError.classList.remove("hidden");
        inputError.textContent = `${fName.name} cannot be empty!`;
        invalidateElm(fName);

        isFormValid = false;
    }  

    if(!lName.value){
        errorIcon.classList.remove("hidden");
        inputError.classList.remove("hidden");
        inputError.textContent = `${lName.name} cannot be empty!`;
        invalidateElm(lName);

        isFormValid = false;
    }
   
}


if(!fName.value){

    validateInputs();

    e.preventDefault();

}else{
    
   
} */