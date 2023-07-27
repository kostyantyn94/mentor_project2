import globalState from "./modules/_globalstate.js";
import validate from "./modules/_validation.js";
import next from "./modules/_btns.js";
import toggler from "./modules/_switcher.js";
import plan_choice from "./modules/_plan.js";
import adds_choice from "./modules/_adds.js";
import adds_finish from "./modules/_finish.js";
import { plan_check } from "./modules/_plan.js";

// declare const for side menu

const menu_number = document.querySelectorAll('.menu__number');

// declare const for each page

const info = document.querySelector('.info');
const plan = document.querySelector('.plan');
const addons = document.querySelector('.addons');
const finish = document.querySelector('.finish');
const thanks = document.querySelector('.thanks')

// if page is refreshed menu number is set to 1 again

for (let elem of menu_number) {
    if (elem.innerHTML == '1') {
        elem.classList.add('menu__number_active')
    }
    else {
        elem.classList.remove('menu__number_active')
    }
}

// INFO BLOCK

// getting the "next" button and disabling it

const info_btn = document.querySelector('.info__btn');

info_btn.disabled = true

// geting all inputs

const info_inputs = document.querySelectorAll('.info__input');

// validation of inputs

validate(info_btn, info_inputs, globalState);

// info to plan next btn

info_btn.onclick = (e) => {
    e.preventDefault()
    next(info, plan, 2, menu_number)

}

// PLAN BLOCK

// declaring variable for plan item elements

const plan_type = document.querySelectorAll('.plan__item');

// geting "back" and "next" buttons for plan page

const plan_back = document.querySelector('.plan__btns-back');
const plan_next = document.querySelector('.plan__btns-next');

// disable next button if there is no plan selected

plan_next.disabled = true

// declare variable with null value


// click function for plan item

let activePlan = null;

plan_check(plan_type, globalState, activePlan, plan_next)


// switcher functionality, declaring consts for switcher and time and year blocks

const switcher = document.querySelector('.plan__slider');
const month = document.querySelector('.plan__time-month');
const year = document.querySelector('.plan__time-year');

// declaring const for the plan prices blocks

const price_n = document.querySelectorAll('.plan__price-number')

// switcher function

switcher.onclick = () => {
    toggler(month, year, globalState, price_n)
}

// plan back btn

plan_back.onclick = () => {
    next(plan, info, 1, menu_number)

}

// declaring const for adds price

const adds_price = document.querySelectorAll('.addons__price')

plan_next.onclick = () => {
    
    // moving to addons page
    
    next(plan, addons, 3, menu_number)

    // puts plan choice in the globalState value

    plan_choice(globalState, adds_price)

}


// ADDONS BLOCK

// getting addons items

const adds = document.querySelectorAll('.addons__item');

// addons checkmark script

adds_choice(adds, globalState)

// getting addons btn's

const addons_back = document.querySelector('.addons__btns-back');
const addons_next = document.querySelector('.addons__btns-next');

// scripting addons btn's

addons_back.onclick = () => {
    next(addons, plan, 2, menu_number)
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

    // change active step and move to finish page

    next(addons, finish, 4, menu_number)

    // set check values for addons in global State to be shown on finish page

    adds_finish(globalState)

    // adding the price of plan to globalState

    document.querySelector('.finish__plan-price').innerHTML = globalState.plan.price;

    // addint the plan price to total price

    globalState.total += +globalState.plan.price.match(/\d+/);

    // display total price on html page

    document.querySelector('.finish__total-price').innerHTML = `+$${globalState.total}/mo`
    
}


// FINISH BLOCK

// getting the "change" btn and scripting it

const finish_change = document.querySelector('.finish__plan-change');

finish_change.onclick = () => {
    next(finish, plan, 2, menu_number)
}

// getting finish btn's

const finish_back = document.querySelector('.finish__btns-back');
const finish_next = document.querySelector('.finish__btns-next');

// back btn on finish page

finish_back.onclick = () => {
    next(finish, addons, 3, menu_number)
}

// next btn on finish page

finish_next.onclick = () => {
    next(finish, thanks, 4, menu_number)
}