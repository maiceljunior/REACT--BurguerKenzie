import "./products.css"
import { CartCardProducts } from "../CartCard"

export const CartProducts = ({ currentSale, removeProduct }) => {

    return (
        <>
            {
                currentSale.map((item) => {
                    return <CartCardProducts item={item} key={item.id} removeProduct={removeProduct} />
                })
            }
        </>
    )
}