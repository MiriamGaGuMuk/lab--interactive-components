/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

let forms = document.forms["registration-form"]

document.querySelector(".btn").addEventListener('click', showSection = function(e) {
  e.preventDefault()

    let userName = forms.elements.username.value
    let passWord = forms.elements.userpassword.value
    let confirmPassword = forms.elements.confirmpassword.value
    let taxId = forms.elements.taxid.value
    let select = forms.elements.account
    let selected = select.options[select.selectedIndex]
    let terms = forms.elements.termsofservice

    let textName = forms.querySelector('.validation--username')
    if (userName === '') {
      textName.textContent = 'Username cannot be blank'

    }else if (userName !== '') {
      textName.textContent = 'Success'
    }

    let validationUserPassword = forms.querySelector('.validation--user-password')
    if (passWord.length < 8) {
      validationUserPassword.textContent = 'Passwords must have a minimum of 8 characters'
    }else if (passWord.length >= 8) {
      validationUserPassword.textContent = 'Success'
    }

    let validationConfirmPassword = forms.querySelector('.validation--confirm-password')
    if (confirmPassword !== passWord || confirmPassword === '') {
      validationConfirmPassword.textContent = 'Passwords must match'
    }else if (confirmPassword === passWord) {
      validationConfirmPassword.textContent = 'Success'
    }

    let validationTaxId = forms.querySelector('.validation--tax-id')
    if (taxId === '') {
      validationTaxId.textContent = 'Must provide Tax ID Number'
    }else if (taxId.length === 10  &&   /^([0-9]{10})$/i.test(taxId)) {//Check if the input is reciving number from 0-9 and {10} the number of digits
      
      validationTaxId.textContent = 'Success'
    }else{
      validationTaxId.textContent = 'Tax ID number is only numbers and is 10 digits'
    }

    let validationAccount = forms.querySelector('.validation--account')
    if (selected.value === "") {
      validationAccount.textContent = "Must select account type"
    }else {
      validationAccount.textContent = "Success"
    }

    let validationTermsOfService = forms.querySelector('.checkbox, form-group__field field--termsofservice ')
    console.log(terms.checked);
    if (terms.checked === false) {
      validationTermsOfService.textContent = "Must approve terms of service"

    }else {
      validationTermsOfService.textContent = "Success"
    }

});