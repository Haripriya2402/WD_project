import { React, useContext } from 'react';
import { Cartcontext } from './Cartcontext';
import { assets } from './frontend_assets/assets';
import "./MenuItems.css";
import { StoreContext } from './StoreContext';

export const MenuItems = ({ product }) => {
    const { cart, setcart } = useContext(Cartcontext);
    const food_name = product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name;

    const { cartitem, addbtn, removebtn } = useContext(StoreContext);

    const addcart = () => {
        setcart([...cart, product]);
    };

    const removecart = () => {
        setcart(cart.filter((item) => item._id !== product._id));
    };

    // Calculate total price based on the quantity in cartitem
    const totalPrice = cartitem[product._id] ? product.price * cartitem[product._id] : product.price;

    return (
        <div className='product'>
            <div className="image">
                <img src={product.image} alt="no img" />
            </div>
            <div className='menu-inc'>
                {!cartitem[product._id]
                    ? <img className='menu-addbtn' onClick={() => addbtn(product._id)} src={assets.add_icon_white} alt='' />
                    : <div className='food_counter'>
                        <img className='menu-minusbtn' onClick={() => removebtn(product._id)} src={assets.remove_icon_red} alt="" />
                        <p className='menu-itemcount '>{cartitem[product._id]}</p>
                        <img className='menu-plusbtn' onClick={() => addbtn(product._id)} src={assets.add_icon_green} alt="" />
                    </div>}
            </div>
            <div className="menu-details">
                <h3 className='menu-food'>{food_name}</h3>
                <p className='menu-des'><b>Description: </b> {product.description}</p>
                <p className='menu-price'>Rs: {totalPrice}</p>
                <div className="menu-btn">
                {cart.includes(product)
                    ? <button className='btnremove addcart-btn' onClick={removecart}>Remove from Cart</button>
                    : <button className='addcart-btn' onClick={addcart}>Add to Cart</button>}
                </div>
            </div>
        </div>
    );
};
