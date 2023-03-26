import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/productContext"

export const ProductCard = ({ product }) => {
    const { dispatch, state } = useProduct();
    const navigate = useNavigate();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const exists = state.cart.some((prod) => prod.id == product.id)

    return (
        <div className="product-card">
            <img onClick={() => navigate(`/products/${product.id}`)} className='btn img' src={product.image} alt="" />
            <p>{product.title}</p>
            {
                exists ? <button onClick={() => navigate('/cart')} className='removeBtn btn' >Go to Cart</button> : <button onClick={() => addToCart(product)} className='addBtn btn' >Add to Cart</button>
            }
        </div>
    )
}