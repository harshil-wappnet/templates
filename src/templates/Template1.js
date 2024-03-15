import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import Navbar from "../components/Navbar";
// import DashboardMap from "../components/DashboardMap";
import Footer from "../components/Footer";
import HideSideBar from '../components/HideSideBar'; // Import HideSideBar component
import MainSideBar from '../components/MainSideBar'; // Import MainSideBar component
import useAdditionalSidebar from '../useAdditionalSidebar';
// import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Template1 = () => {
    const [showAdditionalSidebar, toggleAdditionalSidebar] = useAdditionalSidebar();
    return (
        <>
            <Navbar toggleAdditionalSidebar={toggleAdditionalSidebar} showAdditionalSidebar={showAdditionalSidebar} />   {/*className="ml-200"*/}
            <div className="w-100">
                {showAdditionalSidebar ? (
                    <HideSideBar className="d-none d-lg-block" style={{ width: "17%" }} />
                ) : (
                    <MainSideBar className="d-none d-lg-block" style={{ width: "17%" }} />
                )}
                <div className="align-items-center layout-style ">
                    <Layout />
                </div>
            </div>
            <Footer className="ml-200" />
        </>
    );
};

export default Template1;
