import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"

import data from "../data/products.json"

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
            .then(response => {
                console.log(response)
                if (!id) {
                    setProducts(response)
                } else {
                    const filtered = response.filter(i => i.category === id)
                    setProducts(filtered)
                }
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return "Cargando"

    return (
        <div>
            <h1>BIENVENIDO A TECHIFY!!</h1>

            <div>
                {products.map(product => (
                    <div className="contenedorProductos" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                        <p className="precios">{product.price}</p>
                        <NavLink to={`/detail/${product.id}`}>
                            <button>Ver Más</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
} 