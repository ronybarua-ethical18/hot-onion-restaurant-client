import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    products: [], //{id, name, desc, image, price}
    cart: [], //{id, name, desc, image, price, quantity}
    currentItem: null,
    loading: false,
    error: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((product) => product._id === action.payload._id)
            const inCart = state.cart.find((item) => item._id === action.payload._id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item._id === action.payload._id ?
                    { ...item, quantity: item.quantity + 1 } : item)
                    : [...state.cart, { ...item, quantity: 1 }]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item =>  item._id !== action.payload._id)
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload._id ? 
                    {...item, quantity: +action.payload.quantity}
                    : item
                    )           
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case actionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        case actionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }
        default:
            return state
    }

}
export default shopReducer;