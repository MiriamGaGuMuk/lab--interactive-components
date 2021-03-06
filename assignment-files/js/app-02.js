
/* 02 - FORM VALIDATION :: YOUR CODE BELOW */


let form = document.getElementById('registration-form')
let validateUser = document.querySelector('.validation--username')
let validatePass = document.querySelector('.validation--user-password')
let confirmPass = document.querySelector('.validation--confirm-password')
let validateTxId = document.querySelector('.validation--tax-id')
let validateAccount = document.querySelector('.validation--account')
let validateTerms = document.querySelector('.validation--terms-of-service')
let confirmCheckbox = document.querySelector('.checkbox')
let submitingForm = document.querySelector('.validation--entire-form')



form.addEventListener("submit", function(e){

  e.preventDefault();
  
  let fields = document.querySelectorAll('.form-group__field_input')
  fields.forEach(function(input){

    console.log(confirmCheckbox.checked)
    
    if (input.value === "" &&  input.name === "username") {
        validateUser.innerHTML = "Username cannot be in blank"
      } else if (input.name === "username" && input.value.length > 0) {
        validateUser.innerHTML = "Success"
      }

    if (input.value.length < 8 && input.name === "userpassword") {
        validatePass.innerHTML = "Password must have a minimum of 8 characters"
    } else if (input.name === "username" && input.value.length <= 8) {
        validatePass.innerHTML = "Success"
    }

    if (input.name === 'confirmpassword') {
      if (input.value.length > 7 && fields[2].value === fields[1].value) {
        confirmPass.innerHTML = 'Success';
      } else {
        confirmPass.innerHTML = 'Passwords must match'
      }
    }

    if (input.name === 'taxid') {
      if (input.value === "") {
        validateTxId.innerHTML = "Must provide Tax ID number"
      } else if (isNaN(input.value) || input.value.length !== 10) {
        validateTxId.innerHTML = "Tax ID number is only numbers and is 10 digits"
      } else {
        validateTxId.innerHTML = "Success"
      }
    }

    if (input.name === 'account') {
      if(input.selectedIndex === 0){
        validateAccount.innerHTML = 'Must select account type';
      }else {
      validateAccount.innerHTML = 'Success';
      }
    }
  })


  if(confirmCheckbox.checked === false){
    validateTerms.innerHTML = 'Must approve terms of service';
  }else {
    validateTerms.innerHTML = 'Success';
  }


  if (validateUser.innerHTML === "Success" && validatePass.innerHTML === "Success" && confirmPass.innerHTML === "Success" && validateTxId.innerHTML === "Success" && validateAccount.innerHTML  === "Success" &&
    validateTerms.innerHTML === "Success" ) {
    submitingForm.innerHTML = "Form Complete"
  }

})