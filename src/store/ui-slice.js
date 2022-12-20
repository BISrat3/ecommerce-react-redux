import {createSlice} from '@reduxjs/toolkit'
// createslice - when we call it, it creates a slice

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false
    },
    // a map of all reducers - a map of cases a lot of case that we need to handle 
    // reducers uses another thrid party library to mutate instead of changing a state
    reducers:{
        // toggle Method 
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiActions= uiSlice.actions;

export default uiSlice
