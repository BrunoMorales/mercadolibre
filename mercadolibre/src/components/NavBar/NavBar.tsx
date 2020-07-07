import React, { FunctionComponent, ReactElement, useState } from "react";
import './NavBar.scss'
import { Link } from "react-router-dom";


const NavBar: FunctionComponent = (): ReactElement => {
    const [searchInput, setSearchInput] = useState<string>('')

    const handleType = ({ target: { value } }: { target: { value: string } }) => setSearchInput(value)
    const submitOnEnter = (e: React.KeyboardEvent) => { if (e.keyCode === 13) { console.log('enter was pressed') } }

    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
                <Link to='/' >
                    <img alt='ml_logo' className='nav-logo'
                        src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' />
                </Link>
                <div className='search-wrapper'>
                    <input value={searchInput} onChange={handleType} className='search-box' placeholder='Nunca dejes de buscar' onKeyDown={submitOnEnter} />
                    <Link to={{ pathname: `/items`, search: `search=${searchInput}` }} className='search-button'>
                        <i className='material-icons'>search</i>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar