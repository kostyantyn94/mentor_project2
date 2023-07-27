const next = function to_next (cur_page, next_page, page_number, menu_number) {
    cur_page.classList.add('hidden')
    next_page.classList.remove('hidden')
    for (let elem of menu_number) {
        if (elem.innerHTML == page_number) {
            elem.classList.add('menu__number_active')
        }
        else {
            elem.classList.remove('menu__number_active')
        }
    }
}


export default next