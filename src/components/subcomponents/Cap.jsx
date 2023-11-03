import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import "../../css/style.css"
import Logo from "../../images/Logo.svg"

const Cap = (props) => {
    return (
        <>
            <header>
                <div className="container">
                    
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <p>POWERBANK 3.0</p>
                    </div>
                    
                    
                    <div className="nav">
                        <nav>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Pages</li>
                            <li>FeedBack</li>
                        </nav>
                    </div>
                    
                    <div className="download">
                        <button>Contact</button>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Cap;