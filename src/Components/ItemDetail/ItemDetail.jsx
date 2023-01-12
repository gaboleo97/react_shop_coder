
//import { ItemCount } from "../itemCount/ItemCount"
import "./ItemDetail.css"
import * as React from 'react';
import { useState, useEffect } from "react";

import {ItemCount} from "../ItemCount/ItemCount";



export const ItemDetail = ({ title, img, category, price, onAddToCart }) => {
    return (
        <div className="card-detail_main">
            <div className="card-detail_img">
                <img src={img} alt={title} />
            </div>
            <div className="card-detail_detail">
                <h1>{title}</h1>
                <h4 className="priceTag">$ {price}</h4>
                <p>{category}</p>
            </div>
            <ItemCount onAddToCart={onAddToCart} />
            <a href="/cart">Ir al Cart </a>
        </div>
    );
}




