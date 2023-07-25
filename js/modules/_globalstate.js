// declaring globalState object

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
        time: 'month',
        price: ''
    },
    addons: {
        online: {
            item: document.querySelector('#online'),
            checked: false
        },
        storage: {
            item: document.querySelector('#storage'),
            checked: false
        },
        profile: {
            item: document.querySelector('#profile'),
            checked: false
        }
    },
    m_price: ["+$1/mo", "+$2/mo", "+$2/mo"],

    y_price: ["+$10/mo", "+$20/mo", "+$20/mo"],

    total: 0
}

export default globalState