const initialState = {
    isLoad: false,
    items: null,
    filterBy: 'All'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isLoad: true
            };
       case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload
            };
       case 'SET_IS_READY':
            return {
                ...state,
                isLoad: action.payload
            };
        default:
            return state
    }
}