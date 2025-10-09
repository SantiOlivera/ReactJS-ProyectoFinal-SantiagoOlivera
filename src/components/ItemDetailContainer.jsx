import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import data from "../data/products.json"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
            .then(response => {
                const finded = response.find(item => item.id === Number(id))
                console.log(finded)
                if (finded) setProduct(finded)
                else alert("no existe")
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return "Cargando"


    const handleClick = () => setCounter(counter + 1)


    return (
        <div>
            <h1>Dettale del producto:</h1>
            <article className="contenedorProductos">
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
                <p>{product.detail}</p>
                <p className="precios">{product.price}</p>
                <button onClick={handleClick}>Agregar al carrito</button>
                <mark>Total: {counter}</mark>
            </article>
        </div>
    )
}