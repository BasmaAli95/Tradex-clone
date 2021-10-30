var myForm = document.getElementById('myForm')

myForm.addEventListener('input',function(el){
    switch(el.target.id){
        case 'username':checkName(el.target);break
        case 'email':checkEmail(el.target);break
        case 'password':checkPassword(el.target);break
    }
})

function checkName(inputElement){
    var inputText = inputElement.value.trim()
    if(inputText.length >= 3) removeError(inputElement)
    else showError(inputElement , 'enter at leaset 3 character')
}
function checkEmail(emailInput){ 
    var emailText = emailInput.value
    var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEx.test(emailText)) removeError(emailInput)
    else showError(emailInput , 'enter valid email')
}
function checkPassword(passwordInput) {
    var passText = passwordInput.value
    // var strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (strongRegex.test(passText)) removeError(passwordInput)
    else showError(passwordInput, 'please enter at least 1 lowercase , 1 capitalcase , special character and be 8 characters')
}


function showError(y , msg){
    y.nextElementSibling.innerText = msg
    y.nextElementSibling.classList.add('text-danger')
    myForm.addEventListener('onsubmit',function(eve){
        if(msg.length > 0)eve.preventDefault()
    })

}
function removeError(y){
    y.nextElementSibling.innerText = ""
}