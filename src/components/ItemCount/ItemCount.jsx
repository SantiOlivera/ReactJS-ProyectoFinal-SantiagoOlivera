import { useState } from "react"

export const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)

    const handleIncreaseCount = () => {
        if (stock > counter) setCounter(counter + 1)
    }

    const handleDecreaseCount = () => {
        if (counter > 1) setCounter(counter - 1)
    }

    return (
        <div className="contenedorBotonesMM">
            <button onClick={handleDecreaseCount} className="btnMasMenos">-</button>
            <span>{counter}</span>
            <button onClick={handleIncreaseCount} className="btnMasMenos">+</button>
            <button onClick={() => onAdd(counter)} disabled={counter > stock} className="btnAgreCarr" >Agregar al carrito</button>
            {counter > stock && <p>No hay stock disponible</p>}
        </div>
    )

}
