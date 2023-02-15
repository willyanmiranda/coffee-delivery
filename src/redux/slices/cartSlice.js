import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        coffees: [],
    },
    reducers: {
        addCoffee: (state, action) => {
                return {
                    ...state,
                    coffees: [...state.coffees, action.payload],
                }
            },
        
        removeCoffee: (state, action) => {
            let id = action.payload
            let coffeesToAdd = state.coffees.filter(item => item.id !== id);
            return {
                ...state,
                coffees: coffeesToAdd
            }
        },
    }

})

export const { addCoffee, removeCoffee } = cartSlice.actions;
export default cartSlice.reducer;