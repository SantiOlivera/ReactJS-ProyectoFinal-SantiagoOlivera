import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export const Item = ({ item }) => {
    const [stock, setStock] = useState(item.stock)

    useEffect(() => {
        const savedStock = JSON.parse(localStorage.getItem(`stock_${item.id}`))
        if (savedStock !== null) setStock(savedStock)
    }, [item.id])

    return (
        <div className="contenedorProductos">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p className="precios">${item.price.toLocaleString('es-AR')}</p>
            <NavLink to={`/detail/${item.id}`}>
                <button className="btnVerMas">Ver Más</button>
            </NavLink>
            <mark>Stock: {stock}</mark>
        </div>
    )
    
}
