import { useParams } from "react-router-dom"
import { useProduct } from "../../../context/productContext";
import { SingleProductCard } from "./SingleProductCard";

export const SingleProductPage = () => {
    const { id } = useParams();
    const { state } = useProduct();
    const prods = state.products;

    const getSingleProduct = (prods, id) => prods.find((prod) => prod.id == id)
    const product = getSingleProduct(prods, id)

    return (
        <SingleProductCard {...product} />
    )
}