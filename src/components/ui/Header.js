import React from 'react'
import logo from'../../img/logo.png'
const Header = props => {
    return (
        <div>
            <header className = 'center'>
                <img src = {logo} alt="logo"/>
            </header>
        </div>
    )
}


export default Header
