const adds_finish = (state) => {
    if(state.plan.time == 'month') {
        document.querySelector('.finish__plan-type').innerHTML = `${state.plan.type} <span class='finish__plan-time'>(Monthly)</span>`
        if (state.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-online').innerHTML = state.m_price[0]
            state.total += +state.m_price[0].match(/\d+/)
        }
        if (state.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-storage').innerHTML = state.m_price[1]
            state.total += +state.m_price[1].match(/\d+/)
        }
        if (state.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-profile').innerHTML = state.m_price[2]
            state.total += +state.m_price[2].match(/\d+/)
        }
    }
    else {
        document.querySelector('.finish__plan-type').innerHTML = `${state.plan.type} <span class='finish__plan-time'>(Yearly)</span>`
        if (state.addons.online.checked == true) {
            document.querySelector('.finish__addon-online').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-online').innerHTML = state.y_price[0]
            state.total += +state.y_price[0].match(/\d+/)
        }
        if (state.addons.storage.checked == true) {
            document.querySelector('.finish__addon-storage').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-storage').innerHTML = state.y_price[1]
            state.total += +state.y_price[1].match(/\d+/)
        }
        if (state.addons.profile.checked == true) {
            document.querySelector('.finish__addon-profile').classList.toggle('hidden')
            document.querySelector('.finish__addon-price-profile').innerHTML = state.y_price[2]
            state.total += +state.y_price[2].match(/\d+/)
        }
    }
}

export default adds_finish