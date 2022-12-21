import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({ 
    name : 'Cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        // totalAmount: 0
    },
    reducers:{
        addItemToCart(state, action) {
            // payload properties which is a redux tool set for you which contain any extra data you are adding to the action 
            const newItem = action.payload;
            const existingItem = state.items.find((item)=> item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem){
                state.items.push ({
                    id:newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.title,
                })
            } else{
                existingItem.quantity++,
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        // we need to have action and state - and also we need to have payload to identify items that should be removed 
        removeItemFromCart(state, action) {
            // the id of the item
            const id = action.payload;
            //  we have to identify the item from the array 
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                // we want to remove the item from the array entirely
                // we have to filter out that we need to remove
                state.items = state.items.filter(item => item.id !== id)
            } else {
                // if it is greater than one we will reduce by 1
                existingItem.quantity--;
                // // if the item is removed we need to reduce the removed item price
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
})

export const cartActions = cartSlice.actions

export default cartSlice