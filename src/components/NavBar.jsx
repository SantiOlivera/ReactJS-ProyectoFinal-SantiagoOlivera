import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => (
    <>
        <nav>
            <img src={logo} alt="logo de la tienda" className='logo' />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Productos</a></li>
            </ul>
            <CartWidget />
        </nav>
    </>
)