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
        addOrder: (state, action) => {
            return {
                ...state,
                cep: action.payload.cep,
                adress: action.payload.adress,
                number: action.payload.number,
                complement: action.payload.complement,
                neighborhood: action.payload.neighborhood,
                city: action.payload.city,
                state: action.payload.state,
                payment: action.payload.payment
            }
        }
    }

})

export const { addOrder} = orderSlice.actions;
export default orderSlice.reducer;