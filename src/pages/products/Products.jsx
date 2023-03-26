import { useProduct } from "../../context/productContext";
import { ProductCard } from "./ProductCard";
import './Products.css'

export const Products = () => {
    const { state } = useProduct();

    return (
        <div className="container-p">
            <h1>All Products</h1>
            <div className="products">
                {state?.products?.map((product) => <ProductCard product={product} />)}
            </div>
        </div>
    )
}