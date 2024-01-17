import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [
        {
            id: "CMD-123",
            products: [
              { name: "Margarita", quantity: 2 },
            ],
            bill: 15.80,
            paid : false
          },
    ]
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
        paid : (state, action) => {
            const {order, paid} = action.payload;
            if (order){
                order.paid = paid;
            }
        }
    }
})

export const { add, paid } = dataSlice.actions;
export default dataSlice.reducer;