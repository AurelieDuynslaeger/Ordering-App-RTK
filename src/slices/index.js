import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders : [
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
            state.orders.push({
                id: payload.id,
                products: payload.products || [],
                bill: payload.bill || 0,
                paid: payload.paid || false,
            })
        },
        addProduct: (state, { payload }) => {
            const { orderId, product } = payload;
            const order = state.orders.find((order) => order.id === orderId);
          
            if (order) {
              order.products.push(product);
            }
          },
        paid : (state, action) => {
            const {order, paid} = action.payload;
            if (order){
                order.paid = paid;
            }
        },
        deleteOrder: (state, action) => {
            const orderIdToDelete = action.payload;
            state.orders = state.orders.filter(order => order.id !== orderIdToDelete);
          },
    }
})

export const { add, paid, addProduct, deleteOrder } = dataSlice.actions;
export default dataSlice.reducer;