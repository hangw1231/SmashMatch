import React from 'react'

const MenuList = ({ items }) => {
    return (
        <>
            <ul className="menu-list">
                {items.map((item, idx) => (
                    <li key={idx} className="menu-item">
                        <p>{item}</p>
                    </li>
                ))}
            </ul>

            <div className="help-links">
                <p>도움말</p>
                <p>고객센터</p>
            </div>
        </>
    )
}

export default MenuList