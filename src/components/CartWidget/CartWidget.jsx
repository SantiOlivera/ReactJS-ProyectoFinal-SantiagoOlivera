import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import widget from '../../assets/widget.png'

export const CartWidget = () => {
    const { productosAgregados } = useContext(CartContext)

    const totalItems = productosAgregados.length

    return (
        <div className='imgCarrito'>
            <NavLink to="/cart">
                <img src={widget} alt="imagen de un carrito" className='widget' />
                {totalItems > 0 && <span>{totalItems}</span>}
            </NavLink>
        </div>
    )

}