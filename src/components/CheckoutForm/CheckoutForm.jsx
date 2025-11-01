import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"


export const CheckoutForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { productosAgregados, clear } = useContext(CartContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const total = () => {
        return productosAgregados.reduce(
            (accion, producto) => accion + (producto.price * producto.quantity), 0
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formValues.name || !formValues.phone || !formValues.email) {
            alert("Por favor, completa todos los campos")
            return
        }

        const order = {
            buyer: formValues,
            products: productosAgregados,
            total: total(),
            date: new Date().toLocaleString(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
            .then((response) => {
                if (response.id) {
                    clear()
                    alert("Su orden: " + response.id + " ha sido completada!")
                } else {
                    console.log("Error al guardar orden")
                }
            })
    }

    return (
        <div className="contenedorContacto">
            <h3>Datos de Contacto</h3>
            <form onSubmit={handleSubmit} >
                <section className="contenedorInputs">
                    <div>
                        <label>Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            placeholder="Nombre Completo"
                        />
                    </div>

                    <div>
                        <label>Teléfono: </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            placeholder="+54 343..."
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="ejemplo@gmail.com"
                        />
                    </div>
                </section>

                <button type="submit" className="btnComprar">Confirmar compra</button>
            </form>
        </div>
    )
}
