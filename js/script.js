import globalState from "./modules/_globalstate.js";
import validate from "./modules/_validation.js";

// getting the "next" button and disabling it

const info_btn = document.querySelector('.info__btn');

info_btn.disabled = true

// geting all inputs

const info_inputs = document.querySelectorAll('.info__input');

// getting error values from globalState object

let name_error = globalState.name.error;
let email_error = globalState.email.error;
let phone_error = globalState.phone.error;

// getting name, email abd phone values from globalState object

let user_name = globalState.name.text;
let user_email = globalState.email.text;
let user_phone = globalState.phone.text;

// validation of inputs

validate(info_btn, info_inputs, name_error, email_error, phone_error, user_name, user_email, user_phone);

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
    console.log(globalState)
}


// Plan block script

const plan_type = document.querySelectorAll('.plan__item');
let activePlan = null;

const plan_back = document.querySelector('.plan__btns-back');
const plan_next = document.querySelector('.plan__btns-next');

plan_next.disabled = true

plan_type.forEach(elem =>{
    elem.addEventListener('click', (e) => {

        e.currentTarget.classList.add("plan__item_active");
        globalState.plan.type = e.currentTarget.children[1].innerHTML;
        if ((activePlan !== null && activePlan !== e.currentTarget)) {
            activePlan.classList.remove("plan__item_active");
          }
        
        activePlan = e.currentTarget;
          
        if (plan_next.disabled == true) {
            plan_next.disabled = false
        }
    })
})

const switcher = document.querySelector('.plan__slider');
const month = document.querySelector('.plan__time-month');
const year = document.querySelector('.plan__time-year');

const addons = document.querySelector('.addons')
const price_n = document.querySelectorAll('.plan__price-number')


switcher.onclick = () => {
    if(month.classList.contains('plan__time_active')) {
        month.classList.remove('plan__time_active');
        year.classList.add('plan__time_active');
        globalState.plan.time = 'year'
        for (let elem of price_n) {
            elem.innerHTML = Number(elem.innerHTML) * 10
        }

    }
    else {
        month.classList.add('plan__time_active');
        year.classList.remove('plan__time_active');
        globalState.plan.time = 'month'
        for (let elem of price_n) {
            elem.innerHTML = Number(elem.innerHTML) / 10
        }
    }
}


plan_back.onclick = () => {
    info.classList.remove('hidden')
    plan.classList.add('hidden')
    for (let elem of menu_number) {
        if (elem.innerHTML == '1') {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
}


const adds_price = document.querySelectorAll('.addons__price')

plan_next.onclick = () => {
    
    plan.classList.add('hidden');
    addons.classList.remove('hidden');
    for (let elem of menu_number) {
        if (elem.innerHTML == '3') {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
    if (globalState.plan.time == 'year') {

        for (let i = 0; i < globalState.addons.y_price.length; i++) {
            adds_price[i].innerHTML = globalState.addons.y_price[i]
        }

        switch (globalState.plan.type) {
            case 'Arcade': 
            console.log('Arcade')
            globalState.plan.price = '$90/mo'
                break;
            case 'Advanced': 
            console.log('Advanced')
            globalState.plan.price = '$120/mo'
                break;
            case 'Pro': 
            console.log('Pro')
            globalState.plan.price = '$150/mo'
                break;
        }
    }
    else {
        for (let i = 0; i < globalState.addons.m_price.length; i++) {
            adds_price[i].innerHTML = globalState.addons.m_price[i]
        }
        switch (globalState.plan.type) {
            case 'Arcade': 
            globalState.plan.price = '$9/mo'
                break;
            case 'Advanced': 
            globalState.plan.price = '$12/mo'
                break;
            case 'Pro': 
            globalState.plan.price = '$15/mo'
                break;
        }
    }

    console.log(globalState)
}

// Addons block script

const adds = document.querySelectorAll('.addons__item');

adds.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.children[0].checked = !elem.children[0].checked
        if (elem.children[0].checked == true) {
            elem.style.backgroundColor = '#F8F9FF'

        }
        else {
            elem.style.backgroundColor = '#ffffff'
        }
    }) 
})

const addons_back = document.querySelector('.addons__btns-back');
const addons_next = document.querySelector('.addons__btns-next');

addons_back.onclick = () => {
    addons.classList.add('hidden')
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

addons_next.onclick = () => {
    addons.classList.add('hidden')
    finish.classList.remove('hidden')
    for (let elem of menu_number) {
        if (elem.innerHTML == '4') {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
    if(plan.time == 'month') {
        document.querySelector('.finish__plan-type').innerHTML = `${globalState.plan.type} <span class='finish__plan-time'>(Monthly)</span>`
        if (globalState.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('finish__addon-price-online').innerHTML = addons.m_price[0]
            globalState.total += addons.m_price[0].match(/\d+/)[0]
        }
        if (globalState.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('finish__addon-price-storage').innerHTML = addons.m_price[1]
            globalState.total += addons.m_price[1].match(/\d+/)[0]
        }
        if (globalState.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('finish__addon-price-storage').innerHTML = addons.m_price[2]
            globalState.total += addons.m_price[2].match(/\d+/)[0]
        }
    }
    else {
        document.querySelector('.finish__plan-type').innerHTML = `${globalState.plan.type} <span class='finish__plan-time'>(Yearly)</span>`
        if (globalState.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('finish__addon-price-online').innerHTML = addons.y_price[0]
            globalState.total += addons.y_price[0].match(/\d+/)[0]
        }
        if (globalState.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('finish__addon-price-storage').innerHTML = addons.y_price[1]
            globalState.total += addons.y_price[1].match(/\d+/)[0]
        }
        if (globalState.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('finish__addon-price-storage').innerHTML = addons.y_price[2]
            globalState.total += addons.y_price[3].match(/\d+/)[0]
        }
    }

    document.querySelector('.finish__plan-price').innerHTML = globalState.plan.price;


    
}

console.log(globalState.total)
// Finish block script

const finish = document.querySelector('.finish');
const finish_change = document.querySelector('.finish__plan-change');

finish_change.onclick = () => {
    finish.classList.add('hidden')
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