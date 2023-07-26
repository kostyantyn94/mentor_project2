import globalState from "./modules/_globalstate.js";
import validate from "./modules/_validation.js";

// declare variable for side menu

const menu_number = document.querySelectorAll('.menu__number');

// if page is refreshed menu number is set to 1 again

for (let elem of menu_number) {
    if (elem.innerHTML == '1') {
        elem.classList.add('menu__number_active')
    }
    else {
        elem.classList.remove('menu__number_active')
    }
}

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


// Plan block script

const plan_type = document.querySelectorAll('.plan__item');




// get "back" and "next" buttons
const plan_back = document.querySelector('.plan__btns-back');
const plan_next = document.querySelector('.plan__btns-next');

// disable next button when there is no plan selected
plan_next.disabled = true

// declare variable with null value
let activePlan = null;

// click function for plan item
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


// switcher functionality

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

        for (let i = 0; i < globalState.y_price.length; i++) {
            adds_price[i].innerHTML = globalState.y_price[i]
        }

        switch (globalState.plan.type) {
            case 'Arcade':
            globalState.plan.price = '$90/mo'
                break;
            case 'Advanced':
            globalState.plan.price = '$120/mo'
                break;
            case 'Pro': 
            globalState.plan.price = '$150/mo'
                break;
        }
    }
    else {
        for (let i = 0; i < globalState.m_price.length; i++) {
            adds_price[i].innerHTML = globalState.m_price[i]
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

    
}


// Addons block script

const adds = document.querySelectorAll('.addons__item');


adds.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.children[0].checked = !elem.children[0].checked
        if (elem.children[0].checked == true) {
            elem.style.backgroundColor = '#F8F9FF'
            switch (elem) {
                case globalState.addons.online.item:
                    globalState.addons.online.checked = true;
                    break;
                case globalState.addons.storage.item:
                    globalState.addons.storage.checked = true;
                    break;
                case globalState.addons.profile.item:
                    globalState.addons.profile.checked = true;
                    break;
                default:
                    break;
            }
        }
        else {
            elem.style.backgroundColor = '#ffffff'
            switch (elem) {
                case globalState.addons.online.item:
                    globalState.addons.online.checked = false;
                    break;
                case globalState.addons.storage.item:
                    globalState.addons.storage.checked = false;
                    break;
                case globalState.addons.profile.item:
                    globalState.addons.profile.checked = false;
                    break;
                default:
                    break;
            }
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
    
    // total price set to 0 in case user presses "change" button on finish

    globalState.total = 0

    // all addons blocks are hidden in case user presses "change" button on finish

    let finish_adds = document.querySelectorAll('.finish__addon');

    for (let elem of finish_adds) {
        if (!elem.classList.contains('hidden')) {
            elem.classList.add('hidden')
        }
    }

    // change active step

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

    // set check values for addons in global State

    if(globalState.plan.time == 'month') {
        document.querySelector('.finish__plan-type').innerHTML = `${globalState.plan.type} <span class='finish__plan-time'>(Monthly)</span>`
        if (globalState.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-online').innerHTML = globalState.m_price[0]
            globalState.total += +globalState.m_price[0].match(/\d+/)
        }
        if (globalState.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-storage').innerHTML = globalState.m_price[1]
            globalState.total += +globalState.m_price[1].match(/\d+/)
        }
        if (globalState.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-profile').innerHTML = globalState.m_price[2]
            globalState.total += +globalState.m_price[2].match(/\d+/)
        }
    }
    else {
        document.querySelector('.finish__plan-type').innerHTML = `${globalState.plan.type} <span class='finish__plan-time'>(Yearly)</span>`
        if (globalState.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-online').innerHTML = globalState.y_price[0]
            globalState.total += +globalState.y_price[0].match(/\d+/)
        }
        if (globalState.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-storage').innerHTML = globalState.y_price[1]
            globalState.total += +globalState.y_price[1].match(/\d+/)
        }
        if (globalState.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-profile').innerHTML = globalState.y_price[2]
            globalState.total += +globalState.y_price[2].match(/\d+/)
        }
    }

    document.querySelector('.finish__plan-price').innerHTML = globalState.plan.price;

    globalState.total += +globalState.plan.price.match(/\d+/);

    document.querySelector('.finish__total-price').innerHTML = `+$${globalState.total}/mo`
    
}


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

// finish btn's

const finish_back = document.querySelector('.finish__btns-back');
const finish_next = document.querySelector('.finish__btns-next');

const thanks = document.querySelector('.thanks')

finish_back.onclick = () => {
    finish.classList.add('hidden')
    addons.classList.remove('hidden')
    for (let elem of menu_number) {
        if (elem.innerHTML == '3') {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
}

finish_next.onclick = () => {
    finish.classList.add('hidden')
    thanks.classList.remove('hidden')
    console.log(globalState)
}