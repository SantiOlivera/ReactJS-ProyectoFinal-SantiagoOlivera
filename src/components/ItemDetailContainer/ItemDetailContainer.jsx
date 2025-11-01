import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const refDoc = doc(db, "productos", id)

        const timeout = setTimeout(() => {
            getDoc(refDoc)
                .then(snapshot => {
                    if (snapshot.exists()) {
                        setProduct({ id: snapshot.id, ...snapshot.data() })
                    } else {
                        console.log("producto no encontrado")
                    }
                })
                .finally(() => {setLoading(false)})
        }, 2000)

        return () => clearTimeout(timeout)
    }, [id])

    if (loading) return <p>Cargando...</p>

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}
