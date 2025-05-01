import React, { useState } from 'react';
import './MenuPage.css';
import { food_list } from './frontend_assets/assets';
import { MenuItems } from './MenuItems';
import { Finder } from './Finder';

export const MenuPage = () => {
  const [Category, setCategory] = useState("All");
  const data = food_list;
  const [products] = useState(data);

  return (
    <>
      <Finder Category={Category} setCategory={setCategory} />
      <div id="menupage-content">
        <h2>Explore your menu</h2>
        <p className='Underh2'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="product_container">
          {products.map((product) => (
            (Category === "All" || Category === product.category) && (
              <MenuItems key={product._id} product={product} />
            )
          ))}
        </div>
      </div>
    </>
  );
}
