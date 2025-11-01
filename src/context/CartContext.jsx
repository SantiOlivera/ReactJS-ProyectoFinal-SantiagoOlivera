import { createContext, useState, useEffect } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [productosAgregados, setProductosAgregados] = useState([])
    const [productosStock, setProductosStock] = useState([])

    useEffect(() => {
        const productosEnCarrito = JSON.parse(localStorage.getItem("productosAgregados")) || []
        const stockGuardado = JSON.parse(localStorage.getItem("productosStock")) || []

        setProductosAgregados(productosEnCarrito)
        setProductosStock(stockGuardado)
    }, [])


    const updateStock = (productoId, cantidad) => {
        const nuevosStocks = productosStock.map(producto =>
            producto.id === productoId
                ? { ...producto, stock: producto.stock - cantidad }
                : producto
        )
        setProductosStock(nuevosStocks)
        localStorage.setItem("productosStock", JSON.stringify(nuevosStocks))
    }


    const addItem = (producto, quantity) => {
        const { stock, ...rest } = producto
        const alreadyExists = productosAgregados.some(producto => producto.id === rest.id)

        if (!alreadyExists) {
            setProductosAgregados (prev => {
                const nuevosProductos = [...prev, { ...rest, quantity }]
                localStorage.setItem("productosAgregados", JSON.stringify(nuevosProductos))
                return nuevosProductos
            })
            updateStock(rest.id, quantity)
        } else {
            const actualizarProductos = productosAgregados.map(producto => {
                    if (producto.id === rest.id) {
                        const nuevaCantidad = producto.quantity + quantity
                        updateStock(rest.id, quantity)
                        return { ...producto, quantity: nuevaCantidad }
                    } else return producto
                }
            )
            setProductosAgregados(actualizarProductos)
            localStorage.setItem("productosAgregados", JSON.stringify(actualizarProductos)) 
        }
    }


    const deleteItem = id => {
        const productoEliminado = productosAgregados.find(p => p.id === id)
        const otrosProductos = productosAgregados.filter(producto => producto.id !== id)
        setProductosAgregados(otrosProductos)
        localStorage.setItem("productosAgregados", JSON.stringify(otrosProductos))

        if (productoEliminado) {
            const savedStock = JSON.parse(localStorage.getItem(`stock_${id}`))
            const restoredStock = savedStock + productoEliminado.quantity
            localStorage.setItem(`stock_${id}`, JSON.stringify(restoredStock))
        }
    }


    const clear = () => {
        productosAgregados.forEach(producto => {
            const savedStock = JSON.parse(localStorage.getItem(`stock_${producto.id}`))
            const restoredStock = savedStock + producto.quantity
            localStorage.setItem(`stock_${producto.id}`, JSON.stringify(restoredStock))
        })

        setProductosAgregados([])
        localStorage.removeItem("productosAgregados")
    }


    return (
        <CartContext.Provider value={{ productosAgregados, addItem, clear, deleteItem, productosStock }} >
            {children}
        </CartContext.Provider>
    )
        
}
