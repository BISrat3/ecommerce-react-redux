import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({ 
    name : 'Cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers:{
        addItemToCart(state, action) {
            // payload properties which is a redux tool set for you which contain any extra data you are adding to the action 
            const newItem = action.payload;
            const existingItem = state.items.find(item=> item.id === newItem.id)
            if(!existingItem){
                state.items.push ({
                    itemId:newItem.id,
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
        removeItemFromCart() {}
    }

})

export default cartSlice