import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        coffees: [],
        quantity: 1,
    },
    reducers: {
        addCoffee: (state, action) => {
            let id = action.payload
            let includes = state.coffees.map(item => item.id).includes(id)
            if(includes === false) {
                let coffeesToAdd = data.filter(item => item.id === id);
                coffeesToAdd[0].quantity = state.quantity;
                state.coffees = [...state.coffees, coffeesToAdd[0]];
            }
        },

        removeCoffee: (state, action) => {
            let id = action.payload
            let coffeesToAdd = state.coffees.filter(item => item.id !== id);
            state.coffees = coffeesToAdd;
        },

        addQuantity: (state, action) => {
            state.quantity = action.payload
        }
    }

})

export const { addCoffee, addQuantity, removeCoffee } = cartSlice.actions;
export default cartSlice.reducer;