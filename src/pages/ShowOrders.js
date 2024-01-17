import { Space, Table } from 'antd'
import Header from '../components/Header.js'
import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";

const ShowOrders = () => {

    //recup de tous les orders du state inital
    const orders = useSelector(state => state.data.orders);
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
                      <MdOutlineModeEdit />
                      <MdDeleteOutline />
                    </Space>
                  ),
                },
              ];
              const data = orders;
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