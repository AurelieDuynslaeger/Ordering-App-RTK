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
                id: payload.id,
                products: payload.products || [],
                bill: payload.bill || 0,
                paid: payload.paid || false,
            })
        },
        addProduct: (state, { payload }) => {
            const { orderId, product } = payload;
            console.log("Add Product Action - Order ID:", orderId);
            const order = state.items.find((order) => order.id === orderId);
          
            if (order) {
              console.log("Order found:", order);
              order.products.push(product);
            }
          },
        paid : (state, action) => {
            const {order, paid} = action.payload;
            if (order){
                order.paid = paid;
            }
        }
    }
})

export const { add, paid, addProduct } = dataSlice.actions;
export default dataSlice.reducer;