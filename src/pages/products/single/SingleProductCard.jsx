import { useNavigate } from "react-router-dom"
import { useProduct } from "../../../context/productContext";

export const SingleProductCard = (product) => {
    const navigate = useNavigate();
    const { state, dispatch } = useProduct();

    // eslint-disable-next-line
    const exists = state.cart.some((prod) => prod.id == product.id)

    return (
        <div className="s-product-card product-card">
            <img className='btn img' src={product.image} alt="" />
            <div className="details">
                <p>{product.title}</p>
                {
                    exists ? <button onClick={() => navigate('/cart')} className='removeBtn btn' >Go to Cart</button> : <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} className='addBtn btn' >Add to Cart</button>
                }
            </div>
        </div>
    )
}