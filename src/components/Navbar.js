import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TfiViewListAlt } from "react-icons/tfi";
import MainSideBar from './MainSideBar'; // Import MainSideBar component
import OffcanvasSideBar from './OffcanvasSideBar';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/dropdown";
import { MdOutlineWidgets } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import "bootstrap/js/dist/collapse";
import { CgMenuGridO } from "react-icons/cg";
import logo from '../logo.svg'
import { FaWpforms } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import { PiGraduationCapThin } from "react-icons/pi";
import { Scrollbars } from 'react-custom-scrollbars';
import { FaAngular } from "react-icons/fa6";


const Navbar = ({ toggleAdditionalSidebar, showAdditionalSidebar }) => {
    const iconVisible = showAdditionalSidebar;
    const [dropdownStates, setDropdownStates] = useState({});
    const toggleDropdown = (dropdownName) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName]
        }));
    };
    return (
        <>
            <nav className="nav-margin navbar navbar-expand-lg">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                        {iconVisible ? (
                            <TfiViewListAlt className='fs-1 pointer bg-white d-none d-lg-block' onClick={toggleAdditionalSidebar} />
                        ) : (
                            <PiDotsThreeCircleVertical className='fs-1 bg-white rounded-5 pointer d-none d-lg-block' onClick={toggleAdditionalSidebar} />
                        )}
                        <span className='ms-3'>Dashboard</span>
                    </div>
                    {/* Here notepad code */}
                    <div >
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-none d-block  navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 d-flex flex-row">
                                <li>
                                    <form className="d-flex search" role="search">
                                        <input className="search-bar p-0 m-0" type="search" placeholder="Search" />
                                        <button className="btn bg-white" type="submit"><CiSearch className='fs-3' /></button>
                                    </form>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/"><MdDashboard className='fs-3' /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><IoIosNotifications className='fs-4' /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><FaUser className='fs-3' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body  ">
                    dfadgfg
                    {/* <div className="rows bg-image p-0 sidebar d-flex flex-column justify-content-between sidebar-background overflow-y-hidden" style={{ height: "800px" }}> */}
                    {/* <div className="sidebar" > */}
                    {/* <div className="sidebar" style={{ height: "100vh", overflowY: "auto" }}> */}
                    <div className="mt-2" style={{ width: "400px" }}>
                        <Link
                            className="text-decoration-none ms-4 d-flex text-white d-none align-items-center d-sm-inline"
                            role="button"
                            to="/"
                        >
                            <div className="d-flex flex-row justify-content-center align-content-center mt--1">
                                <FaAngular className="fs-3" />
                                <span className="fs-5 ps-2">CREATIVE TIM</span>
                            </div>
                        </Link>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <Scrollbars className="" style={{ height: "90vh" }}>
                            <ul className="nav nav-pills flex-column  gap-2" id="parentM">
                                <li className="nav-item  my-1" >
                                    <Link
                                        to="/"
                                        onClick={() => toggleDropdown('profile')}
                                        data-bs-toggle="collapse"
                                        className="nav-link text-white d-flex flex-row justify-content-lg-start align-items-center"
                                        aria-current="page"
                                    >
                                        <img src={logo} alt="img-profile" className="profile-img" />
                                        <span className="">Andrew Tania</span>
                                        <i className="bi bi-chevron-up ms-3"></i>
                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.profile ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/"
                                                aria-current="page"
                                            >
                                                My Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Edit Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Settings
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <hr className="text-white d-none d-sm-block"></hr>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/dashboard"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <MdDashboard />
                                        <span className="ms-2">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item  my-1 ">
                                    <Link
                                        to="/components"
                                        onClick={() => toggleDropdown('components')}
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-current="page"
                                    >
                                        <CgMenuGridO />
                                        <span className="ms-2">Components </span>
                                        <i className="bi bi-chevron-up ms-3"></i>
                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.components ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/components/buttons"
                                                aria-current="page"
                                            >
                                                Buttons
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Grid System
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/components/panels">
                                                Panels
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Sweet Alerts
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Notifications
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Icons
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Typography
                                            </Link>
                                        </li>

                                    </ul>

                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/"
                                        onClick={() => toggleDropdown('forms')}
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <FaWpforms />
                                        <span className="ms-2">Forms</span>
                                        <i className="bi bi-chevron-up ms-3"></i>
                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.forms ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/"
                                                aria-current="page"
                                            >
                                                Regular Form
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Extended Forms
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Validations Forms
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Wizard
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        onClick={() => toggleDropdown('tables')}
                                        to="/"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <LiaTableSolid />
                                        <span className="ms-2">Tables</span>
                                        <i className="bi bi-chevron-up ms-3"></i>

                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.tables ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/"
                                                aria-current="page"
                                            >
                                                Regular Tables
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Extended Tables
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Database.Net
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        onClick={() => toggleDropdown('maps')}
                                        to="/"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <FaMapMarkerAlt />
                                        <span className="ms-2">Maps</span>
                                        <i className="bi bi-chevron-up ms-3"></i>

                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.maps ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/"
                                                aria-current="page"
                                            >
                                                Google Maps
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Full Screen Map
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Vector Maps
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <MdOutlineWidgets />
                                        <span className="ms-2">Widgets</span>
                                    </Link>
                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/charts"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <FaChartBar />
                                        <span className="ms-2">Charts</span>
                                    </Link>
                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <RiCalendar2Line />
                                        <span className="ms-2">Calendar</span>
                                    </Link>
                                </li>
                                <li className="nav-item  my-1 ">
                                    <Link
                                        to="/"
                                        onClick={() => toggleDropdown('pages')}
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-current="page"
                                    >
                                        <CgMenuGridO />
                                        <span className="ms-2">Pages </span>
                                        <i className="bi bi-chevron-up ms-3"></i>
                                    </Link>
                                    <ul
                                        className={`nav collapse ms-2 flex-column ${dropdownStates.pages ? "show" : ""}`}
                                        data-bs-parent="#parentM"
                                    >
                                        <li className="nav-item ">
                                            <Link
                                                className="nav-link text-white "
                                                to="/"
                                                aria-current="page"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Timeline Page
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Login Page
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Register Page
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                Lock Screen Page
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-white" to="/">
                                                User Page
                                            </Link>
                                        </li>
                                    </ul>

                                </li>
                                <li className="nav-item  my-1">
                                    <Link
                                        to="/"
                                        className="nav-link text-white"
                                        aria-current="page"
                                    >
                                        <PiGraduationCapThin />
                                        <span className="ms-2">Documentation</span>
                                    </Link>
                                </li>
                            </ul>
                        </Scrollbars>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Navbar
