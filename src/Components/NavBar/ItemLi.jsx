import React from 'react'
import { Link } from 'react-router-dom'

export const ItemLi = ({href,children}) => {
    return (
        <>
            <li className="nav-item header__li">
                <Link className="nav-link" to={href}>{children}</Link>
            </li>
        </>
    )
}