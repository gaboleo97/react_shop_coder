import React from 'react'

export const ItemLi = ({href,children}) => {
    return (
        <>
            <li className="nav-item header__li">
                <a className="nav-link" href={href}>{children}</a>
            </li>
        </>
    )
}