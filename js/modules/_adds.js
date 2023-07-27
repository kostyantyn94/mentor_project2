const adds_choice = (adds, state) => {

    adds.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.children[0].checked = !elem.children[0].checked
            if (elem.children[0].checked == true) {
                elem.style.backgroundColor = '#F8F9FF'
                switch (elem) {
                    case state.addons.online.item:
                        state.addons.online.checked = true;
                        break;
                    case state.addons.storage.item:
                        state.addons.storage.checked = true;
                        break;
                    case state.addons.profile.item:
                        state.addons.profile.checked = true;
                        break;
                    default:
                        break;
                }
            }
            else {
                elem.style.backgroundColor = '#ffffff'
                switch (elem) {
                    case state.addons.online.item:
                        state.addons.online.checked = false;
                        break;
                    case state.addons.storage.item:
                        state.addons.storage.checked = false;
                        break;
                    case state.addons.profile.item:
                        state.addons.profile.checked = false;
                        break;
                    default:
                        break;
                }
            }
        }) 
    })
}

export default adds_choice