import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { food_list } from './frontend_assets/assets';
import './Header.css';

export const Header = ({ cart, SetshowLogin }) => {
    const location = useLocation(); // Get the current location
    const [underline, setunderline] = useState("home"); // Default underline is set to 'home'
    const [search, setsearch] = useState("");
    const [isSearchListVisible, setIsSearchListVisible] = useState(false);
    const searchRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = (e) => {
        setsearch(e.target.value);
        setIsSearchListVisible(e.target.value !== "");
    };

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // Update underline based on the current URL path
    useEffect(() => {
        const path = location.pathname;
        if (path==="/"){
            setunderline("home")
        } else if (path === "/menu") {
            setunderline("menu");
        } else if (path === "/Cart"||"/PlaceOrder") {
            setunderline("cart");
        } else if (path === "/signup") {
            setunderline("signup");
        } else {
            setunderline("home"); // Default is home
        }
    }, [location]); // This effect runs when the location changes

    return (
        <>
        <div className='navbar navbar-expand-lg sticky-top p-0 z-2'>
        <div className='navbar1 py-5'>
            <div className="logo container-fluid text-center text-md-start">
                <img className='pt-3' id="logo" src="/images/new Mom's Kitchen.png" alt="" />
            </div>
            {underline !== "cart" && underline !== "signup" && (
                <div ref={searchRef}>
                    <input className='header-search' type="text" placeholder='Search'
                        onChange={handleSearchChange}
                        onFocus={() => setIsSearchListVisible(true)}
                    />
                    {isSearchListVisible && search !== "" && (
                        <div className="header-search-list">
                            {food_list.filter((item) => {
                                return item.name.toLowerCase().includes(search.toLowerCase());
                            }).map((item, index) => (
                                <div className='search-contain' key={index}>
                                    <img className='search-img' src={item.image} alt="no img" />
                                    <h3>{item.name}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className='navbar1-option mt-2 me-4 fw-bold '>
                <ul>
                    <li onClick={() => setunderline("home")} className={underline === "home" ? "active hv" : "hv"}>
                        <Link to={"/"} onClick={scrollToTop}>Home</Link>
                    </li>
                    <li onClick={() => setunderline("menu")} className={underline === "menu" ? "active hv" : "hv"}>
                        <Link to={"/menu"} onClick={scrollToTop}>Menu</Link>
                    </li>
                    <li onClick={() => setunderline("cart")} className={underline === "cart" ? "active hv" : "hv"}>
                        <Link to={"/Cart"} onClick={scrollToTop} className="cart-link">
                            Cart
                            <sup>{cart.length > 0 && <div className="dot"></div>}</sup>
                        </Link>
                    </li>
                    <li onClick={() => setunderline("signup")} className={underline === "signup" ? "active hv" : "hv"}>
                        <span onClick={() => SetshowLogin(true)}>SignUp</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </>
    );
};
