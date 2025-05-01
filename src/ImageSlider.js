import React, { useState, useEffect } from 'react';
import img_1 from "./Image_Slider/1.jpg";
import img_2 from "./Image_Slider/2.jpg";
import img_3 from "./Image_Slider/3.jpg";
import img_4 from "./Image_Slider/4.jpg";
import img_5 from "./Image_Slider/5.jpg";
import img_6 from "./Image_Slider/6.png";
import img_7 from "./Image_Slider/7.jpg";
import img_8 from "./Image_Slider/8.jpg";
import img_9 from "./Image_Slider/9.jpg";
import img_10 from "./Image_Slider/10.jpg";
import img_11 from "./Image_Slider/11.jpg";
import img_12 from "./Image_Slider/12.jpg";
import img_13 from "./Image_Slider/13.jpg";
import "./ImageSlider.css"

export const ImageSlider = () => {

  const images = [img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11,img_12,img_13];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
        <div className="header"  style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div  className="header-contents ">
                <h2 className='image_h2'>Order your favouurite Food</h2>
                <p className='image_p'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time</p>
                <button><a className='text-decoration-none' href="#menupage-content">View menu</a></button>
            </div>
        </div>
    </>
  )
}
