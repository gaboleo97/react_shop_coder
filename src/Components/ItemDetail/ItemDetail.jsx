
//import { ItemCount } from "../itemCount/ItemCount"
import "./ItemDetail.css"
import * as React from 'react';
import { useState, useEffect } from "react";

import { ItemCount } from "../ItemCount/ItemCount";



export const ItemDetail = ({ title, img, category, price, onAddToCart, description }) => {
    console.log({ img });
    console.log({ price });

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row justify-content-center">
                    <div className="col-6 m-20 ">

                        <div className=" ">
                            <div className="card-detail_img">
                                <img className="img-fluid" src={img} alt={title} />
                            </div>    
                            
                        </div>

                    </div>
                        <div className="col-6">
                        <div className="card-detail_detail">
                                <h1 className="mb-20">{title}</h1>
                                <p>{description}</p>
                                <h4 className="priceTag"><b>$ {price}</b></h4>
                                <p>{category}</p>
                            </div>
                            <ItemCount onAddToCart={onAddToCart} />
                            <a href="/cart">Ir al Cart </a>
                        </div>
                    
                </div>
            </div>


        </>

    );
}




