export const addToCart = (obj) =>(
    {
        type: 'ADD_TO_CART',
        payload: obj

    }
);

export const removeFomCart = (id) =>(
    {
        type: 'REMOVE_FROM_CART',
        payload: id

    }
);