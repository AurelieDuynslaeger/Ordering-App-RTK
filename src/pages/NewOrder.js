import React from 'react';
import Header from '../components/Header';
import DetailSelected from '../components/DetailSelected';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from "../slices";
import products from '../services/products';

const NewOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  //récup de tous les orders présents dans le state global
  const orders = useSelector(state => state.data.orders);

  // avec le useParams, on récupère l'id dans l'url et on recherche si cette commande exsite déjà
  // sinon on lui dit que les produits que nous allons selectionner seront donc mis dans le tableau products de cet objet
  const currentOrder = orders.find(order => order.id === id) || { products: [], bill: 0 };
  const selectedProducts = currentOrder.products;

  // fonction qui ajoute les produits au panier
  const addProductToCart = (product) => {
    //on vérifie si le produit existe déjà dans le panier
    const existingProduct = selectedProducts.find(p => p.name === product.name);

    //s'il existe, alors on incrémente sa quantité de 1 à chaque clik
    if (existingProduct) {
      //on  vérifie si dans le tableaux des produits selectionnés et on récupere un tableau updaté, avec les quantités (nb de clik) de chaque produit. la clé quantité est créée et initialisée à 1 au premier clik et s'incrémente a chaque clik de +1
      const updatedProducts = selectedProducts.map(p => {
        if (p.name === product.name) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      //calcul du pris on parcourt le tableau updatedProducts, on réduit ce tableaU à une seule valeur ici p est le produit duquel on va extraire son prix x sa quantité, on obtient le total
      const totalAmount = updatedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);
      //arrondi sur le totalAmount pour les 2chiffres après la virgule
      const roundedTotal = Math.round(totalAmount * 100) / 100;

      //appel au disptach pour ajouter les produits dans l'objet a son tableau products, ainsi que bill, la facture de la commande (qui est donc égal au total arrondi du dessus)
      dispatch(addProduct({
        orderId: id,
        products: updatedProducts,
        bill: roundedTotal
      }));
    } else {
      //sinon si le produit n'existait pas dans products, on le crée
      const newProduct = { ...product, quantity: 1 };
      const totalAmount = (currentOrder.bill || 0) + (newProduct.price * newProduct.quantity);
      const roundedTotal = Math.round(totalAmount * 100) / 100;

      //et idem on disotach
      dispatch(addProduct({
        orderId: id,
        products: [...selectedProducts, newProduct],
        bill: roundedTotal
      }));
    }
  };

  //map sur la liste des produits proposés (tableaux products dans le fichier services)
  //mise en forme dans le composant Product et on rappèle les props
  const listProducts = products.map(product => {
    return (
      <Product key={product.id} name={product.name} price={product.price} cover={product.cover} action={() => addProductToCart(product)}/>
    );
  });

  return (
    <div className="container">
      <Header/>
      <div className="wrapper">
        <div className='products-list'>
          {listProducts}
        </div>
        <DetailSelected orderId={id} selectedProducts={selectedProducts}/>
      </div>
    </div>
  );
}

export default NewOrder;
