import React, { useEffect, useState, useContext } from 'react';
import { assets } from './frontend_assets/assets';
import { Cartcontext } from './Cartcontext';
import { StoreContext } from './StoreContext';
import emtcart from './frontend_assets/cart.png'
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
  const { cart, setcart } = useContext(Cartcontext);
  const { cartitem, addbtn, removebtn } = useContext(StoreContext);
  const [total, settotal] = useState(0);
  const navigate =useNavigate();
  
  useEffect(() => {
    settotal(cart.reduce((acc, cur) => acc + parseInt(cur.price) * (cartitem[cur._id] || 1), 0));
  }, [cart, cartitem]);

  function removecart(id) {
    setcart(cart.filter(cart => cart._id !== id));
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
};

  return (
    <div className='cart-body'>
      <h1 className='cart-heading'>Cart Products</h1>
      {cart.length === 0 
      ?<>
        <img className='cart-body-empty-img' src={emtcart} alt="" />
        <h1 className='cart-body-empty'>Your Cart is empty</h1>
      </>
      :<div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product._id}>
            <div className='cart-img'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='cart-details'>
              <div className='food-info'>
                <h3 className='food-name'>{product.name}</h3>
                <div className='cart-inc'>
                  <div className='cart_counter'>
                    <img
                      className='cart-minusbtn'
                      onClick={() => {
                        if (cartitem[product._id] > 1) {
                          removebtn(product._id);
                        }
                      }}
                      src={assets.remove_icon_red}
                      alt=''
                    />
                    <p className='cart-itemcount'>{cartitem[product._id] || 1}</p>
                    <img
                      className='cart-plusbtn'
                      onClick={() => addbtn(product._id)}
                      src={assets.add_icon_green}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='price-section'>
                <p className='cart-price'>
                  Rs: {product.price * (cartitem[product._id] || 1)}
                </p>
              </div>
              <button
                className='btnremove1'
                onClick={() => removecart(product._id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>}
      <div className="cart-totol-amt">
      {cart.length > 0 ? (
    <button className='mt-5' onClick={() => {
      scrollToTop(); // Scroll to top before navigating
      navigate('/PlaceOrder', { state: { total } });
    }}>
      PROCEED TO PAYMENT
    </button>
  ) : <></>}

      <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
      </div>
    </div>
  );
};
