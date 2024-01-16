import React from 'react'

const MenuCard = ({icon, title, description, action, style}) => {
  return (
    <div className="menu-tab" onClick={action} style={style}>
        <div className="tab-header">
            {icon}
        </div>
        <div className="tab-body">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
    )
}

export default MenuCard

