const globalState = {
    name: {
        text: '',
        error: ''
    },
    email: {
        text: '',
        error: ''
    },
    phone: {
        text: '',
        error: ''
    }
}

let error_block_name = document.createElement('div');
error_block_name.classList.add('info_error');
error_block_name.style.cssText = "font-size: 14px; color: red; font-weight: 700; position: absolute; top: 0; right: 0;"

let error_block_email = document.createElement('div');
error_block_email.classList.add('info_error');
error_block_email.style.cssText = "font-size: 14px; color: red; font-weight: 700; position: absolute; top: 0; right: 0;"

let error_block_phone = document.createElement('div');
error_block_phone.classList.add('info_error');
error_block_phone.style.cssText = "font-size: 14px; color: red; font-weight: 700; position: absolute; top: 0; right: 0;"


const info_inputs = document.querySelectorAll('.info__input');


info_inputs.forEach(element => {
    element.addEventListener('input', () => {
    
        if (element.name == 'name') {

            if(/\d/.test(element.value)) {
                element.style.outline = "1px solid red"
                element.before(error_block_name);
                globalState.name.error = "Name can not contain digets";
                error_block_name.innerHTML = globalState.name.error;
            }
            else if (element.value.length == 0) {
                element.style.outline = "1px solid red"
                element.before(error_block_name);
                globalState.name.error = "Field can not be empty";
                error_block_name.innerHTML = globalState.name.error;
            }
            else if (element.value.length > 20) {
                element.style.outline = "1px solid red"
                element.before(error_block_name);
                globalState.name.error = "Name can not be longer than 20 characters";
                error_block_name.innerHTML = globalState.name.error;
            }
            else{
                error_block_name.innerHTML = ''
                error_block_name.remove()
                element.style.outline = "1px solid #483EFF"
                globalState.name.error = ''
                globalState.name.text = element.value

            }
        }
        if (element.name == 'email') {
            if(!(/.*?@.*?\..+?/.test(element.value))) {
                element.style.outline = "1px solid red"
                element.before(error_block_email);
                globalState.email.error = "Wrong email format";
                error_block_email.innerHTML = globalState.email.error;
            }
            else if (element.value.length == 0) {
                element.style.outline = "1px solid red"
                element.before(error_block_email);
                globalState.email.error = "Field can not be empty";
                error_block_email.innerHTML = globalState.email.error;
            }
            else{
                error_block_email.innerHTML = ''
                error_block_email.remove()
                element.style.outline = "1px solid #483EFF"
                globalState.email.error = ''
                globalState.email.text = element.value
            }
        }
        if (element.name == 'phone') {
            if(!(/^\+/.test(element.value))) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Your phone number must start with '+'";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else if(element.value.length >= 2 && isNaN(Number(element.value))) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Your phone number must contain only digits";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else if (element.value.length >= 2 && (/.*?[\.\/\*@#\s\-]+.*/.test(element.value))) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Your phone number must contain only digits";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else if (element.value.length > 15) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Phone number can not be longer than 15 characters";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else if (element.value.length == 0) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Field can not be empty";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else{
                error_block_phone.innerHTML = ''
                error_block_phone.remove()
                element.style.outline = "1px solid #483EFF"
                globalState.phone.error = ''
                globalState.phone.text = element.value
                
            }
        }
    })
})
