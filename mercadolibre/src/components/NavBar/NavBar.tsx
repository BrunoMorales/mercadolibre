import React, { FunctionComponent, ReactElement, useState } from "react";
import './NavBar.scss'
import { Link, useHistory } from "react-router-dom";


const NavBar: FunctionComponent = (): ReactElement => {
    const [searchInput, setSearchInput] = useState<string>('')
    const routerHistory = useHistory()

    const searchLink = (): string => searchInput ? `/items?search=${searchInput}` : '/'
    const handleType = ({ target: { value } }: { target: { value: string } }) => setSearchInput(value)
    const submitOnEnter = (e: React.KeyboardEvent) => { if (e.keyCode === 13) { routerHistory.push(searchLink()) } }

    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <Link to='/' >
                    <img alt='ml_logo' className='nav-logo'
                        src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' />
                </Link>
                <div className='search-wrapper'>
                    <input
                        value={searchInput}
                        onChange={handleType}
                        placeholder='Nunca dejes de buscar'
                        className='search-box'
                        onKeyDown={submitOnEnter} />
                    <Link to={searchLink()} className='search-button'>
                        <i className='material-icons'>search</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar