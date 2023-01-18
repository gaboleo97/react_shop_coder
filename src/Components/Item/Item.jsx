import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom'

export const Item = (props) => {
    const { title, price, img, category, id, description } = props.item;

    console.log(props.item);
    return (
        <>
    <div className='col-3'>
                <div className="card card__style">
                    <a href={`/producto/${id}`}><img src={img} className="card-img-top" alt={title} /></a>                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><b>${price}</b></p>
                        <Link to={`/producto/${id}`}> Ver Mas </Link>
                    </div>
                </div>
            </div>



        </>
        
    );
}


