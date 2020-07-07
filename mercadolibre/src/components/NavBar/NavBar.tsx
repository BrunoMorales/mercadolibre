import React, { FunctionComponent, ReactElement, useState } from "react";
import './NavBar.scss'

interface navBarProps {
    onSubmit: (input: string) => void
}

const NavBar: FunctionComponent<navBarProps> = ({ onSubmit }): ReactElement => {
    const [searchInput, setSearchInput] = useState<string>('')

    const handleType = ({ target: { value } }: { target: { value: string } }) => setSearchInput(value)
    const handleSubmit = () => { onSubmit(searchInput) }

    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
                <a href='/' >
                    <img alt='ml_logo' className='nav-logo'
                        src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' />
                </a>
                <div className='search-wrapper'>
                    <input value={searchInput} onChange={handleType} className='search-box' placeholder='Nunca dejes de buscar' />
                    <button type='submit' onClick={handleSubmit} className='search-button' >
                        <i className='material-icons'>search</i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar