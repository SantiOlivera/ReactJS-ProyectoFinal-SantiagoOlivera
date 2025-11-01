import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore"
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const refCollection = id
            ? query(collection(db, "productos"), where("category", "==", id))
            : collection(db, "productos")

        const timeout = setTimeout(() => {
            getDocs(refCollection)
                .then(snapshot => {
                    if (snapshot.size === 0) setItems([])
                    else {
                        setItems(
                            snapshot.docs.map(doc => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
                        )
                    }
                })
                .finally(() => { setLoading(false) })
        }, 2000)

        return () => clearTimeout(timeout)
        
    }, [id])

    if (loading) return "Cargando..."

    return (
        <div>
            <h1>BIENVENIDO A TECHIFY!!</h1>
            <ItemList items={items} />
        </div>
    )
}
