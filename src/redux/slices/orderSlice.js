import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        cep: '',
        adress: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        payment: ''
    },
    reducers: {
        addCep: (state, action) => {
            state.cep = action.payload;
        },
        addAdress: (state, action) => {
            state.adress = action.payload;
        },
        addNumber: (state, action) => {
            state.number = action.payload;
        },
        addComplement: (state, action) => {
            state.complement = action.payload;
        },
        addNeighborhood: (state, action) => {
            state.neighborhood = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        addState: (state, action) => {
            state.state = action.payload;
        },
        addPayment: (state, action) => {
            state.payment = action.payload;
        }
    }

})

export const { addCep, addAdress, addNumber, addComplement, addCity, addState, addNeighborhood, addPayment } = orderSlice.actions;
export default orderSlice.reducer;