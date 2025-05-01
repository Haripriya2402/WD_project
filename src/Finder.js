import React, { useRef } from 'react'
import "./Finder.css"
import { menu_list } from './frontend_assets/assets';
import left from "./frontend_assets/arrow-left-circle.svg"
import right from "./frontend_assets/arrow-right-circle.svg"


export const Finder = ({Category,setCategory}) => {
    const imageContainerRef = useRef(null); 


  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -500,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 500, 
        behavior: 'smooth' 
      });
    }
  };
  return (
    <>
    <div id="body">
      <div id="content1" className='container-fluid '>
        <div className="button-control d-flex justify-content-between">
          <h2 className='h2'>What's on your mind? </h2>
          <div >
          <img onClick={scrollLeft} className="scroll-btn left-btn me-4" src={left} alt="LEFT" />
          <img onClick={scrollRight} className="scroll-btn right-btn me-2" src={right} alt="RIGHT" />
          </div>
        </div>
        <div className="image" ref={imageContainerRef}>
          {menu_list.map((item,index)=>(
          <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index}>
            <img className={Category===item.menu_name?"active img":"img"} src={item.menu_image} alt={item.menu_name} />
            <h3 className='finder_foodname mt-2'>{item.menu_name}</h3>
          </div>))}
        </div>  
      </div>
    </div>
    </>
  )
}
