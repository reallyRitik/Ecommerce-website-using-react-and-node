import React, { useState } from "react";
import Logo from '../../assets/images/logo/logo.webp'
import { Link } from "react-router-dom";
import CountryDropDown from "../CountryDropDown";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBox from "./SearchBox";
import Navigation from "./Navigation";


const Header = () => {
    const [currency, setCurrency] = useState("USD");
    const [language, setLanguage] = useState("English");

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>

                </div>
                <div className="secondheadersection">
                    <div className="secondmain">
                        <a href="#about-us">About Us</a>
                        <a href="#my-account">My Account</a>
                        <a href="#wishlist">Wishlist</a>
                        <a href="#order-tracking">Order Tracking</a>
                        <div className="writesomething">
                            <span role="img" aria-label="secure-delivery">
                                🖐️
                            </span>{" "}
                            100% Secure delivery without contacting the courier
                        </div>
                    </div>

                    <div className="headerleftshow">
                        <div className="headershownumber">
                            Need help? Call Us: <a href="tel:+0020500">+0020 500</a>
                        </div>
                        <div>
                            <select value={language} onChange={handleLanguageChange}>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                            </select>
                        </div>
                        <div>
                            <select value={currency} onChange={handleCurrencyChange}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logowrapper d-flex align-item-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                            </div>
                            <div className="col-sm-10 d-flex align-item-center part2">
                                <CountryDropDown />

                                {/* Header SearchBar start*/}

                                <SearchBox />
                                {/* Header SearchBar end*/}

                                <div className="part3 d-flex align-item-center ml-auto" >
                                    <Button className="circle mr-3"><FiUser /></Button>
                                    <div className="ml-auto carttab d-flex align-item-center">
                                        <span className="price" style={{ textAlign: 'center', justifyContent: 'center' }}>$3.29
                                        </span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle cartbag" style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}>
                                                <IoBagHandleOutline />
                                            </Button>
                                            <span className="count d-flex align-item-center justify-content-center">6</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation/>
            </div>
        </>
    )
}

export default Header;