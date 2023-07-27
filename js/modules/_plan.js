const plan_choice = (state, adds_price) => {

    if (state.plan.time == 'year') {

        for (let i = 0; i < state.y_price.length; i++) {
            adds_price[i].innerHTML = state.y_price[i]
        }

        switch (state.plan.type) {
            case 'Arcade':
                state.plan.price = '$90/mo'
                break;
            case 'Advanced':
                state.plan.price = '$120/mo'
                break;
            case 'Pro': 
            state.plan.price = '$150/mo'
                break;
        }
    }
    else {
        for (let i = 0; i < state.m_price.length; i++) {
            adds_price[i].innerHTML = state.m_price[i]
        }
        switch (state.plan.type) {
            case 'Arcade': 
            state.plan.price = '$9/mo'
                break;
            case 'Advanced': 
            state.plan.price = '$12/mo'
                break;
            case 'Pro': 
            state.plan.price = '$15/mo'
                break;
        }
    }
}

export const plan_check = (plan_type, state, activePlan, plan_next) => {
    plan_type.forEach(elem =>{
    elem.addEventListener('click', (e) => {

        e.currentTarget.classList.add("plan__item_active");
        state.plan.type = e.currentTarget.children[1].innerHTML;
        if ((activePlan !== null && activePlan !== e.currentTarget)) {
            activePlan.classList.remove("plan__item_active");
          }
        
        activePlan = e.currentTarget;
          
        if (plan_next.disabled == true) {
            plan_next.disabled = false
        }
    })
})
}

export default plan_choice