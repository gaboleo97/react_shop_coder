import React from 'react';
import "./Card.css";

export const Card = ({ img, href, title, description, btn, price }) => {
    return (
        <>
            <div className='col-3'>
                <div className="card card__style">
                    <a href={href}><img src={img} className="card-img-top" alt={title} /></a>                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><b>{price}</b></p>
                        <a href={href} className="btn btn-primary">{btn}</a>
                    </div>
                </div>
            </div>

        </>
    )
}

