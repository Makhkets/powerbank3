import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Play_icon from "../images/play_icon.svg"
import Graphic from "../images/graphic.jpg"

const Index = () => {
    return (
        <>
        <main>
            <div className="main">
                <div className="section1">    
                    <div className="title">
                        <p>
                            Best place buy and <br /> sell
                            <span className="highlighted"> crypto <br />currency </span>
                            asset
                        </p>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</p>
                    </div>

                    <div className="buttons">
                        <button className="blue">
                            Get Started
                        </button>
                        <button className="transparent">
                            <img src={Play_icon}></img>  Watch Tutorials
                        </button>
                    </div>
                </div>
                <div className="section2">
                </div>
            </div>


            <div className="index_section">
                <div className="img">
                    <img src={Graphic} alt="" />
                </div>
                <div className="section">
                    <div className="main_title">
                        <p>About us</p>
                    </div>
                    <div className="title">Accelerate the world’s transition</div>
                    <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</div>
                    <div className="button">
                        <button>More About Us</button>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </main>
        </>
    );
};

export default Index;