import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => (
    <>
        <nav>
            <NavLink to="/">
                <img src={logo} alt="logo de la tienda" className='logo' />
            </NavLink>
            <NavLink to="/">home</NavLink>
            <NavLink to="/category/teclados">teclados</NavLink>
            <NavLink to="/category/mouses">mouses</NavLink>
            <NavLink to="/category/auriculares">auriculares</NavLink>
            <NavLink to="/contact">contacto</NavLink>
            <CartWidget />
        </nav>
    </>
)