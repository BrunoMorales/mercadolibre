import React, { FunctionComponent, ReactElement } from "react";
import './NavBar.scss'

interface navBarProps {
}

const NavBar: FunctionComponent<navBarProps> = (): ReactElement => {


    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
                <a href='/' >
                    <img src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' alt='' className='nav-logo' />
                </a>
                <div className='search-wrapper'>
                    <input className='search-box' placeholder='Nunca dejes de buscar' />
                    <button type='submit' className='search-button' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar