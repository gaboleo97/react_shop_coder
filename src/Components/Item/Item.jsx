import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom'

export const Item = (props) => {
    const { title, price, imgurl, category, id } = props.item;

    return (
        <div className="item-card">
            <div className="item-card_header">
                <h2>{title}</h2>
            </div>
            <div className="item-card_img">
                <img src={imgurl} alt={title} />
            </div>
            <div className="item-card_detail">
                <h3 className="item-card_price">$ {price}</h3>
                <small>{category}</small>
            </div>
            <Link to={`/productos/${id}`}>Ver Mas </Link>
            <br></br>
        </div>
    );
}


