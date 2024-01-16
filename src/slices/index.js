import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders : []
}

const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        add : (state, { payload }) => {
            state.orders.push({
                id: Date.now(),
                bill: payload,
                paid: false
            })
        },
    }
})

export const { add } = dataSlice.actions;
export default dataSlice.reducer;