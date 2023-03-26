import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/productContext"

export const Cart = () => {
    const { state } = useProduct();
    const navigate = useNavigate();

    return (
        <div className="cart container-p">
            <h1>Cart</h1>
            {state.cart.map((product) => <div className="product-card">
                <img src={product.image} className="img" alt="" />
                <p onClick={() => navigate(`/products/${product.id}`)}>{product.title}</p>
                <button className='removeBtn btn' >Remove from cart</button>
            </div>)}
        </div>
    )
}