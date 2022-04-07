import { Button } from "../Button"
import "./cartCard.css"

export const CartCardProducts = ({ item, removeProduct }) => {

    return (
        <>
            {
                <li id={item.id} className="liCart">
                    <div className="positionImg">
                        <img src={item.img} alt={item.name} />
                    </div>

                    <div className="position">
                        <span className="nameProduct">{item.name}</span>
                        <span className="nameCategory">{item.category}</span>
                    </div>

                    <Button className="removeCart" onClick={() => removeProduct(item)}>Remover</Button>
                </li>
            }

        </>
    )
}