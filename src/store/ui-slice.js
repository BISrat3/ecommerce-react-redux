import {createSlice} from '@reduxjs/toolkit'
// createslice - when we call it, it creates a slice

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    // a map of all reducers - a map of cases a lot of case that we need to handle 
    // reducers uses another thrid party library to mutate instead of changing a state
    reducers:{
        // toggle Method 
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action){
            state.notification ={
                status: action.payload.status, 
                title: action.payload.title,
                message: action.payload.message,
            }
        },
    },
})

export const uiActions= uiSlice.actions;

export default uiSlice
