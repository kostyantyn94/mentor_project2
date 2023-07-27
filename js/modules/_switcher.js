const toggler = (month, year, state, price) => {

    if(month.classList.contains('plan__time_active')) {
        month.classList.remove('plan__time_active');
        year.classList.add('plan__time_active');
        state.plan.time = 'year'
        for (let elem of price) {
            elem.innerHTML = Number(elem.innerHTML) * 10
        }
    
    }
    else {
        month.classList.add('plan__time_active');
        year.classList.remove('plan__time_active');
        state.plan.time = 'month'
        for (let elem of price) {
            elem.innerHTML = Number(elem.innerHTML) / 10
        }
    }
}

export default toggler