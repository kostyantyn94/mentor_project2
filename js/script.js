const globalState = {
    name: {
        text: '',
        error: 'none'
    },
    email: {
        text: '',
        error: 'none'
    },
    phone: {
        text: '',
        error: 'none'
    },
    plan: {
        type: '',
        time: ''
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

const info_btn = document.querySelector('.info__btn')


info_btn.disabled = true


for (let element of info_inputs) {
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
            if (element.value.length == 0) {
                element.style.outline = "1px solid red"
                element.before(error_block_email);
                globalState.email.error = "Field can not be empty";
                error_block_email.innerHTML = globalState.email.error;
            }
            else if(!(/.*?@.*?\..+?/.test(element.value))) {
                element.style.outline = "1px solid red"
                element.before(error_block_email);
                globalState.email.error = "Wrong email format";
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
            if (element.value.length == 0) {
                element.style.outline = "1px solid red"
                element.before(error_block_phone);
                globalState.phone.error = "Field can not be empty";
                error_block_phone.innerHTML = globalState.phone.error;
            }
            else if(!(/^\+/.test(element.value))) {
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
            else{
                error_block_phone.innerHTML = ''
                error_block_phone.remove()
                element.style.outline = "1px solid #483EFF"
                globalState.phone.error = ''
                globalState.phone.text = element.value
                
            }
        }

        if (globalState.name.error == '' && globalState.email.error == '' && globalState.phone.error == '') {
            info_btn.disabled = false
        }
        else 
        {
            info_btn.disabled = true
        }

    })
}

const menu_number = document.querySelectorAll('.menu__number');

const info = document.querySelector('.info');
const plan = document.querySelector('.plan');


info_btn.onclick = (e) => {
    e.preventDefault()
    info.classList.add('hidden')
    plan.classList.remove('hidden')
    for (let elem of menu_number) {
        if (elem.innerHTML == '2') {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
}


const plan_type = document.querySelectorAll('.plan__item');
let activePlan = null;


plan_type.forEach(elem =>{
    elem.addEventListener('click', (e) => {

        e.currentTarget.classList.add("plan__item_active");

        if ((activePlan !== null && activePlan !== e.currentTarget)) {
            activePlan.classList.remove("plan__item_active");
          }

        activePlan = e.currentTarget;
    })
})

const switcher = document.querySelector('.plan__slider');
const month = document.querySelector('.plan__time-month');
const year = document.querySelector('.plan__time-year');


switcher.onclick = () => {
    if(month.classList.contains('plan__time_active')) {
        month.classList.remove('plan__time_active');
        year.classList.add('plan__time_active');
    }
    else {
        month.classList.add('plan__time_active');
        year.classList.remove('plan__time_active');
    }

}



const plan_back = document.querySelector('.plan__btns-back');

const plan_next = document.querySelector('.plan__btns-next');

plan_back.onclick = () => {
    info.classList.remove('hidden')
    plan.classList.add('hidden')
}