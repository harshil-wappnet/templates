import React from 'react'
// import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
// import useAdditionalSidebar from '../useAdditionalSidebar';

const Layout = () => {
    // const [showAdditionalSidebar, toggleAdditionalSidebar] = useAdditionalSidebar();
    return (
        <div>
            <div className="main-body-content mx-lg-4 " >
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
