import { Button } from "../Button"
import "./CardProducts.css"

export const CardProducts = ({ item, handleClick }) => {

    return (
        <>
            {
                <li id={item.id}>
                    <div>
                        <img src={item.img} alt="Hamburgueria" />
                    </div>
                    <span className="name">{item.name}</span>
                    <span className="category">{item.category}</span>
                    <span className="price">{item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}</span>
                    <Button onClick={() => handleClick(item)} className="buttons" id={item.id}>Comprar</Button>
                </li>
            }
        </>
    )
}