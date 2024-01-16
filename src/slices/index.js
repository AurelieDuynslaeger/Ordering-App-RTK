import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : []
}

const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        add : (state, { payload }) => {
            state.items.push({
                id: `CMD-${Date.now()}`,
                products: [payload],
                bill: 0,
                paid: false
            })
        },
    }
})

export const { add } = dataSlice.actions;
export default dataSlice.reducer;