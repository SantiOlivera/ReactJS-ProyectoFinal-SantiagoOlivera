import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartItem = ({ producto }) => {
    const { deleteItem } = useContext(CartContext)

    return (
        <div  className="contenedorItemsCarrito">
            <img src={producto.img} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p className="precios">${producto.price.toLocaleString('es-AR')}</p>
            <p>Cantidad: {producto.quantity}</p>
            <p>Total: ${(producto.price * producto.quantity).toLocaleString('es-AR')}</p>
            <button onClick={() => deleteItem(producto.id)} className="btnEliminar">Eliminar</button>
        </div>
    )
} 
