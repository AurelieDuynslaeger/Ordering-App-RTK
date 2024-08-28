import React from 'react';
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct, updateProductQuantity, removeProduct } from "../slices"; // Assure-toi que les bonnes actions sont importées
import products from '../services/products';

const NewOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orders = useSelector(state => state.data.orders);
  const currentOrder = orders.find(order => order.id === id) || { products: [], bill: 0 };
  const selectedProducts = currentOrder.products;

  // Fonction pour ajouter un produit au panier
  const addProductToCart = (product) => {
    const existingProduct = selectedProducts.find(p => p.name === product.name);

    if (existingProduct) {
      const updatedProducts = selectedProducts.map(p => {
        if (p.name === product.name) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      const totalAmount = updatedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);
      const roundedTotal = Math.round(totalAmount * 100) / 100;

      dispatch(addProduct({
        orderId: id,
        products: updatedProducts,
        bill: roundedTotal
      }));
    } else {
      const newProduct = { ...product, quantity: 1 };
      const totalAmount = (currentOrder.bill || 0) + (newProduct.price * newProduct.quantity);
      const roundedTotal = Math.round(totalAmount * 100) / 100;

      dispatch(addProduct({
        orderId: id,
        products: [...selectedProducts, newProduct],
        bill: roundedTotal
      }));
    }
  };

  // Fonction pour mettre à jour la quantité d'un produit
  const updateProductQuantity = (productName, quantityChange) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.name === productName) {
        const newQuantity = p.quantity + quantityChange;
        return { ...p, quantity: newQuantity > 0 ? newQuantity : 0 };
      }
      return p;
    });

    const totalAmount = updatedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    const roundedTotal = Math.round(totalAmount * 100) / 100;

    dispatch(updateProductQuantity({
      orderId: id,
      products: updatedProducts,
      bill: roundedTotal
    }));
  };

  // Fonction pour supprimer un produit
  const removeProductFromCart = (productName) => {
    const updatedProducts = selectedProducts.filter(p => p.name !== productName);

    const totalAmount = updatedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    const roundedTotal = Math.round(totalAmount * 100) / 100;

    dispatch(removeProduct({
      orderId: id,
      products: updatedProducts,
      bill: roundedTotal
    }));
  };

  const listProducts = products.map(product => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      cover={product.cover}
      action={() => addProductToCart(product)}
    />
  ));

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <div className='products-list'>
          {listProducts}
        </div>
        <DetailSelected
          orderId={id}
          selectedProducts={selectedProducts}
          onUpdateProductQuantity={updateProductQuantity}
          onRemoveProduct={removeProductFromCart}
        />
      </div>
    </div>
  );
}

export default NewOrder;

