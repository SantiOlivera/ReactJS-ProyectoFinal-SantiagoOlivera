import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"

export const Cart = () => {
    const { productosAgregados, clear } = useContext(CartContext)


    return (
        <div className="contenedorCarrito">
            <h1>Carrito de Compras</h1>
            {productosAgregados.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <div>
                        {productosAgregados.map((producto) => (
                            <CartItem key={producto.id} producto={producto} />
                        ))}
                    </div>

                    <CheckoutForm />

                    <button onClick={clear} className="btnVaciarCarr">Vaciar carrito</button>
                </>
            )}
        </div>
    )

}
