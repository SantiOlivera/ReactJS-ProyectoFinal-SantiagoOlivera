import { useContext, useEffect, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const [ counter, setCounter ] = useState(1)
    const [ stock, setStock ] = useState(product.stock)

    useEffect(() => {
        const savedStock = JSON.parse(localStorage.getItem(`stock_${product.id}`))

        if (savedStock !== null && savedStock > product.stock) {
            setStock(product.stock)
            localStorage.setItem(`stock_${product.id}`, JSON.stringify(product.stock))

        } else if (savedStock !== null) {
            setStock(savedStock)
            
        } else {
            setStock(product.stock)
        }

    }, [product.id, product.stock])


    const onAdd = (quantity) => {
        if (quantity <= stock) {
            addItem(product, quantity)
            const newStock = stock - quantity
            setStock(newStock)
            localStorage.setItem(`stock_${product.id}`, JSON.stringify(newStock))
        }
    }

    return (
        <div>
            <h1>Dettales del producto:</h1>
            <article className="contenedorProductosDetalles">
                <img src={product.img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.detail}</p>
                <p className="precios">${product.price.toLocaleString('es-AR')}</p>
                <ItemCount 
                    stock={stock} 
                    onAdd={onAdd} 
                    initial={counter}
                    setCounter={setCounter}
                />
                <mark>Stock: {stock}</mark>
            </article>
        </div>
    )
}
