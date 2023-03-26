import { TbBooks } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useProduct } from '../context/productContext'

export const Navbar = () => {
    const {state, dispatch} = useProduct();

    const handleSearch = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'SEARCH',
            payload: e.target.value,
        })
    }

    return (
        <nav className='navbar'>
            <div>
                <TbBooks size={30} />
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/products'>
                    <p>Products</p>
                </NavLink>
            </div>
            <div className='input'>
                <input type="text" placeholder='Search products...' value={state.search} onChange={(e) => handleSearch(e)} />
            </div>
            <div className='cart-icon'>
                <NavLink to='/cart'>
                    <FaShoppingCart size={35} className='icon' />
                    <span>{state.cart.length}</span>
                </NavLink>
            </div>
        </nav>
    )
}