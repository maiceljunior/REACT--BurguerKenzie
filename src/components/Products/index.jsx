import { CardProducts } from "../CardProducts"

export const Products = ({ products, Search, handleClick }) => {

    const productsFilter = products.filter((item) => {
        if (Search !== null) {
            return item.name.toLowerCase().includes(Search.toLowerCase().trim()) || item.category.toLowerCase().includes(Search.toLowerCase().trim())
        }
        return productsFilter
    })

    return (
        <>
            {
                products && productsFilter.map((item) => {
                    return <CardProducts handleClick={handleClick} key={item.id} item={item} />
                })
            }
        </>
    )
}