import { createSlice } from "@reduxjs/toolkit";


//création du slice avec une commande essai dans le tableau des orders dans le state global
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
        //action add qui créer le nvl order en l'initalisant (sur le composant Home)
        add : (state, { payload }) => {
            state.orders.push({
                id: payload.id,
                products: payload.products || [],
                bill: payload.bill || 0,
                paid: payload.paid || false,
            })
        },
        //action d'ajout de produit dans l'order en cours
        //retrouver avec l'id, dans lequel sont push les produits dans le tableau products de l'objet
        //le calcul de bill se fait dans le meme temps en avec les quantités de chaque produits
        //composant NewOrder
        addProduct: (state, { payload }) => {
            const { orderId, products, bill } = payload;
            const order = state.orders.find((order) => order.id === orderId);
            if (order) {
              order.products = products;
              order.bill = bill;
            }
          },
        paid : (state, action) => {
            const {order, paid} = action.payload;
            if (order){
                order.paid = paid;
            }
        },
        //objet order à supprimer retrouvé avec l'id
        //filtre fait sur le state global et ainsi est "pop" du tableau
        deleteOrder: (state, action) => {
            const orderIdToDelete = action.payload;
            state.orders = state.orders.filter(order => order.id !== orderIdToDelete);
          },
    }
})

export const { add, paid, addProduct, deleteOrder } = dataSlice.actions;
export default dataSlice.reducer;