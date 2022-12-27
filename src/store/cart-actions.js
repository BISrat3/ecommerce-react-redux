import { response } from "express";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () =>{
    return async (dispatch) =>{
        const fetchData = async () =>{
            // this time we use get method no need to request by default it is activated 
            const response = await fetch('https://ecommerce-fefd2-default-rtdb.firebaseio.com/cart.json')
        
        if (!response.ok){
            throw new Error(' Could not fetch data! ')
        }
        const data = await response.json()
        return data
    }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }))
        } catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message:'Fetching cart data failed!',
              }))
        }
    }
} 
// action creator- create new function
export const sendCartData = (cart) => {
    // writing a function that create another function
    // return another function
    return async (dispatch) => {
        // dispatch the actual function we want to perform 
        // // dispatch like adding cart item
        // dispatch();
        // uiActions.dispatch(uiActions.showNotification({
        dispatch(    
        uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message:'Sending cart data!',
        }))
        const sendRequest = async () => {
            const response = await 
          // this data re-execute when ever our cart is changed 
          fetch('https://ecommerce-fefd2-default-rtdb.firebaseio.com/cart.json',
          // use post method to store new data
          {
            // we use  put method to overwrite with the existing data
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items, 
                totalQuantity: cart.totalQuantity,
            }),
          })
         
          if(!response.ok){
            throw new Error("Sending cart data failed")
          //  or
            // dispatch(uiActions.showNotification({
            //   status: 'error',
            //   title: 'Error',
            //   message:'Sending cart data failed!',
            // }))
          }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
              status: 'success',
              title: 'Success!',
              message:'Sent cart data successfully!',
            }))
        } catch (error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message:'Sending cart data failed!',
              }))
          }
        }
}