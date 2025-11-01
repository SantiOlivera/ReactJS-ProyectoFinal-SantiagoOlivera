import { Item } from "../Item/Item"

export const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}