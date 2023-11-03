import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


import Cap from "./subcomponents/Cap";



const Layout = () => {
    return (
        <>
            <div className="container">
                <div>
                    <Cap />
                    <Outlet />
                </div>
            </div>

            {/* <Footer user={user} flag={flag} /> */}
        </>
    );
    
};

export default Layout;