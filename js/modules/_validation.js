function validate(btn, inputs, nameError, emailError, phoneError, nameText, emailText, phoneText) {

    let error_block_css = "font-size: 14px; color: red; font-weight: 700; position: absolute; top: 0; right: 0;"

    let error_block_name = document.createElement('div');
    error_block_name.classList.add('info_error');
    error_block_name.style.cssText = error_block_css;

    let error_block_email = document.createElement('div');
    error_block_email.classList.add('info_error');
    error_block_email.style.cssText = error_block_css;

    let error_block_phone = document.createElement('div');
    error_block_phone.classList.add('info_error');
    error_block_phone.style.cssText = error_block_css;

    for (let element of inputs) {
        element.addEventListener('input', () => {
        
            if (element.name == 'name') {
    
                if(/\d/.test(element.value)) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_name);
                    nameError = "Name can not contain digets";
                    error_block_name.innerHTML = nameError;
                }
                else if (element.value.length == 0) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_name);
                    nameError = "Field can not be empty";
                    error_block_name.innerHTML = nameError;
                }
                else if (element.value.length > 20) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_name);
                    nameError = "Name can not be longer than 20 characters";
                    error_block_name.innerHTML = nameError;
                }
                else {
                    error_block_name.innerHTML = ''
                    error_block_name.remove()
                    element.style.outline = "1px solid #483EFF"
                    nameError = ''
                    nameText = element.value
                }
            }
            if (element.name == 'email') {
                if (element.value.length == 0) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_email);
                    emailError = "Field can not be empty";
                    error_block_email.innerHTML = emailError;
                }
                else if(!(/.*?@.*?\..+?/.test(element.value))) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_email);
                    emailError = "Wrong email format";
                    error_block_email.innerHTML = emailError;
                }
                else{
                    error_block_email.innerHTML = ''
                    error_block_email.remove()
                    element.style.outline = "1px solid #483EFF"
                    emailError = ''
                    emailText = element.value
                }
            }
            if (element.name == 'phone') {
                if (element.value.length == 0) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_phone);
                    phoneError = "Field can not be empty";
                    error_block_phone.innerHTML = phoneError;
                }
                else if(!(/^\+/.test(element.value))) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_phone);
                    phoneError = "Your phone number must start with '+'";
                    error_block_phone.innerHTML = phoneError;
                }
                else if(element.value.length >= 2 && isNaN(Number(element.value))) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_phone);
                    phoneError = "Your phone number must contain only digits";
                    error_block_phone.innerHTML = phoneError;
                }
                else if (element.value.length >= 2 && (/.*?[\.\/\*@#\s\-]+.*/.test(element.value))) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_phone);
                    phoneError = "Your phone number must contain only digits";
                    error_block_phone.innerHTML = phoneError;
                }
                else if (element.value.length > 15) {
                    element.style.outline = "1px solid red"
                    element.before(error_block_phone);
                    phoneError = "Phone number can not be longer than 15 characters";
                    error_block_phone.innerHTML = phoneError;
                }
                else{
                    error_block_phone.innerHTML = ''
                    error_block_phone.remove()
                    element.style.outline = "1px solid #483EFF"
                    phoneError = ''
                    phoneText = element.value
                    
                }
            }
    
            if (nameError == '' && emailError == '' && phoneError == '') {
                btn.disabled = false
            }
            else 
            {
                btn.disabled = true
            }
    
        })
    }
};

export default validate;