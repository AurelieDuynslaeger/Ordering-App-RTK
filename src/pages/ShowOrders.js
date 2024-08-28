import { Space, Table, message } from 'antd'
import Header from '../components/Header.js'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { deleteOrder } from '../slices/index.js';
import "../stylesheets/ShowOrders.scss"
import { useNavigate } from 'react-router-dom';

const ShowOrders = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.data.orders);
  const navigate = useNavigate();

  //table importée de ant design, on définit le nom des colonnes ainsi que leur date index (ceux présent dans les objets du state)
  const columns =
    [
      {
        title: 'N° de Commande',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Total',
        dataIndex: 'bill',
        key: 'bill',
        render: (text) => `${text} €`,
      },
      {
        title: 'Statut Commande',
        dataIndex: 'paid',
        key: 'paid',
        render: (paid) => (
          <span className={`order-status ${paid ? 'paid' : 'unpaid'}`}>
            {paid ? 'Réglé' : 'En attente de paiement'}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            {/* Afficher "Éditer" pour les commandes en attente de paiement */}
            {!record.paid && (
              <>
                <MdOutlineModeEdit
                  className='edit-svg'
                  onClick={() => navigate(`/NewOrder/${record.id}`)}
                />
                <MdDeleteOutline
                  onClick={() => removeOrder(record.id)}
                  className='delete-svg'
                />
              </>
            )}
            {/* Afficher uniquement "Supprimer" pour les commandes réglées */}
            {record.paid && (
              <MdDeleteOutline
                onClick={() => removeOrder(record.id)}
                className='delete-svg'
              />
            )}
          </Space>
        ),
      },
    ];
  //ici data pour ant design reprends tous les orders qu'on a récupéré avec useSelector sur le state global
  const data = orders.map(order => ({
    ...order,
    key: order.id,
  }));

  const removeOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    message.success('La commande a été supprimée avec succès.');
  };

  return (
    <div className="container">
      <Header />
      <div className="items-list">
        <h3>Liste des commandes :</h3>
        <Table columns={columns} dataSource={data} />

      </div>
    </div>
  )
}

export default ShowOrders