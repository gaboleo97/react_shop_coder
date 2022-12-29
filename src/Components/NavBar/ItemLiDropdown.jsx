import React from 'react'

export const ItemLiDropdown = ({href,children,dropdownItem,hrefItem}) => {
    return (
        <>
            <li className="nav-item dropdown header__li">
                <a className="nav-link dropdown-toggle" href={href} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {children}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item header__li" href={hrefItem}>{dropdownItem}</a></li>
                </ul>
            </li>
        </>
    )
}


