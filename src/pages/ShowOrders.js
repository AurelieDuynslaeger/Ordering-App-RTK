import { Space, Table, message } from 'antd'
import Header from '../components/Header.js'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { deleteOrder } from '../slices/index.js';
import "../stylesheets/ShowOrders.scss"

const ShowOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.data.orders);

  //table importée de ant design, on définit le nom des colonnes ainsi que leur date index (ceux présent dans les objets du state)
    const columns=
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
                },
                {
                  title: 'Statut Commande',
                  dataIndex: 'paid',
                  key: 'paid',
                  render : (paid) => (paid? 'Réglé' : 'En attente de paiment'),
                },
                {
                  title: 'Action',
                  key: 'action',
                  render: (text, record) => (
                    <Space size="middle">
                      <MdOutlineModeEdit className='edit-svg'/>
                      <MdDeleteOutline onClick={() => removeOrder(record.id)} className='delete-svg'/>
                    </Space>
                  ),
                },
              ];
              //ici data pour ant design reprends tous les orders qu'on a récupéré avec useSelector sur le state global
              const data = orders;
              const removeOrder = (orderId) => {
                dispatch(deleteOrder(orderId));
                message.success('La commande a été supprimée avec succès.');
              }
  return (
    <div className="container">
    <Header/>
    <div className="items-list">
        <h3>Liste des commandes :</h3>
        <Table columns={columns} dataSource={data} />

    </div>
    </div>
  )
}

export default ShowOrders