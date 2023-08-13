const globalState = {
    name: true,
    email: true,
    phone: true
}


const createErrorBlocks = () => {
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

    return {error_block_name, error_block_email, error_block_phone}
}

const validateName = (element, error_block_name) => {
    
    if(/\d/.test(element.value)) {
        element.style.outline = "1px solid red"
        element.before(error_block_name);
        error_block_name.innerHTML = "Name can not contain digits";
        globalState.name = true
    }
    else if (element.value.length === 0) {
        element.style.outline = "1px solid red"
        element.before(error_block_name);
        error_block_name.innerHTML = "Field can not be empty";
        globalState.name = true
    }
    else if (element.value.length > 20) {
        element.style.outline = "1px solid red"
        element.before(error_block_name);
        error_block_name.innerHTML = "Name can not be longer than 20 characters";
        globalState.name = true
    }
    else {
        error_block_name.innerHTML = ''
        error_block_name.remove()
        element.style.outline = "1px solid #483EFF"
        globalState.name = []
        globalState.name = false
    }

}

const validateEmail = (element, error_block_email) => {
    if (!element.value.length) {
        element.style.outline = "1px solid red"
        element.before(error_block_email);
        error_block_email.innerHTML = "Field can not be empty";
        globalState.email = true
    }
    else if(!(/.*?@.*?\..+?/.test(element.value))) {
        element.style.outline = "1px solid red"
        element.before(error_block_email);
        error_block_email.innerHTML = "Wrong email format";
        globalState.email = true
    }
    else{
        error_block_email.innerHTML = ''
        error_block_email.remove()
        element.style.outline = "1px solid #483EFF"
        globalState.email = false
    }
}

const validatePhone = (element, error_block_phone) => {
    if (!element.value.length) {
        element.style.outline = "1px solid red"
        element.before(error_block_phone);
        error_block_phone.innerHTML = "Field can not be empty";
        globalState.phone = true
    }
    else if(!(/^\+/.test(element.value))) {
        element.style.outline = "1px solid red"
        element.before(error_block_phone);
        error_block_phone.innerHTML = "Your phone number must start with '+'";
        globalState.phone = true
    }
    else if(element.value.length >= 2 && isNaN(Number(element.value))) {
        element.style.outline = "1px solid red"
        element.before(error_block_phone);
        error_block_phone.innerHTML = "Your phone number must contain only digits";
        globalState.phone = true
    }
    else if (element.value.length >= 2 && (/.*?[\.\/\*@#\s\-]+.*/.test(element.value))) {
        element.style.outline = "1px solid red"
        element.before(error_block_phone);
        error_block_phone.innerHTML = "Your phone number must contain only digits";
        globalState.phone = true
    }
    else if (element.value.length > 15) {
        element.style.outline = "1px solid red"
        element.before(error_block_phone);
        error_block_phone.innerHTML = "Phone number can not be longer than 15 characters";
        globalState.phone = true
    }
    else{
        error_block_phone.innerHTML = ''
        error_block_phone.remove()
        element.style.outline = "1px solid #483EFF"
        globalState.phone = false
    }
    
}

function validate(btn, inputs) {

    const {error_block_name, error_block_email, error_block_phone} = createErrorBlocks();

    for (let element of inputs) {
        element.addEventListener('input', () => {
            if (element.name === 'name') {
                validateName(element, error_block_name)
            }
            if (element.name === 'email') {
                validateEmail(element, error_block_email)
            }
            if (element.name === 'phone') {
                validatePhone(element, error_block_phone);
            }

            btn.disabled = !(!globalState.name && !globalState.email && !globalState.phone);
        })
    }
};

export default validate;
