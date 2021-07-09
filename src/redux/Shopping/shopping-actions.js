import * as actionTypes from './shopping-types'
import axios from 'axios'
export const addToCart = (itemID) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            _id:itemID
        }
    }
}
export const removeFromCart = (itemID) =>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload: {
            _id:itemID
        }
    }
}
export const adjustQuantity = (itemID, value) =>{
    return{
        type:actionTypes.ADJUST_QUANTITY,
        payload:{
            _id: itemID,
            quantity: value
        }
    }
}
export const loadCurrentItem = (item) =>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

export const fetchDataRequest = () =>{
    return{
        type:actionTypes.FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess = (data) =>{
    return{
        type:actionTypes.FETCH_DATA_SUCCESS,
        payload:data
    }
}
export const fetchDataFailure = (error) =>{
    return{
        type:actionTypes.FETCH_DATA_FAILURE,
        payload:error
    }
}
export const fetchProductData = () =>{
    return (dispatch) =>{
        dispatch(fetchDataRequest)
        axios.get('https://enigmatic-refuge-11397.herokuapp.com/allProduct')
        .then (res => {
            const products = res.data;
            dispatch(fetchDataSuccess(products))
        })
        .catch(error =>{
            const errorMessage = error.message
            dispatch(fetchDataFailure(errorMessage))
        })
    }
}