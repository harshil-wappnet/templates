import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import Navbar from "../components/Navbar";
// import DashboardMap from "../components/DashboardMap";
import Footer from "../components/Footer";
import HideSideBar from '../components/HideSideBar'; // Import HideSideBar component
import MainSideBar from '../components/MainSideBar'; // Import MainSideBar component
import useAdditionalSidebar from '../useAdditionalSidebar';
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Template1 = () => {
    const [showAdditionalSidebar, toggleAdditionalSidebar] = useAdditionalSidebar();
    return (
        <>
            <Navbar toggleAdditionalSidebar={toggleAdditionalSidebar} showAdditionalSidebar={showAdditionalSidebar} className="ml-200" />
            <div className={"container-fluid p-0"}>
                <div className="d-flex flex-row">
                    {showAdditionalSidebar ? (
                        <HideSideBar />
                    ) : (
                        <MainSideBar />
                    )}
                    <div className="align-items-center ms-auto me-auto">
                        <Layout />
                    </div>
                </div>
            </div >
            <Footer className="ml-200" />
        </>
    );
};

export default Template1;
