const INITIAL_STATE = {
    sections: [{
        title: 'Hoodie Season',
        id: 1,
        linkURL: 'shop'
    },
    {
        title: 'Cart',
        id: 2,
        linkURL: 'checkout',
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;