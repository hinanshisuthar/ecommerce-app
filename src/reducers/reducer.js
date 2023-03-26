export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart, state.cart.filter((prod) => prod.id !== action.payload.id)]
            }
        case 'SEARCH':
            return {
                ...state,
                search: action.payload,
                products: [...state.products].filter((prod) => prod.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default:
            return state;
    }
}