import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
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

const HideSideBar = () => {
    return (
        <div className="bg-image p-0 col-lg-1 col-sm-3 sidebar d-flex flex-column justify-content-between min-vh-100 sidebar-background">
            <div className="sidebar h-100">
                <div className="mt-2 text-center" style={{ width: "128px" }}>
                    <Link
                        className="text-decoration-none ms-4 d-flex text-white d-none align-items-center d-sm-inline"
                        role="button"
                        to="/"
                    >
                        <div className="d-flex flex-row justify-content-center align-content-center mt--1">
                            <FaAngular className="fs-2" />
                        </div>
                    </Link>
                    <hr className="text-white d-none d-sm-block"></hr>
                    <Scrollbars className="" style={{ height: "90vh" }}>
                        <ul className="nav nav-pills flex-column gap-2" id="parentM">
                            <li className="nav-item my-1" >
                                <Link
                                    to="/"
                                    data-bs-toggle="collapse"
                                    className="nav-link text-white d-flex flex-row justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <img src={logo} alt="img-profile" className="profile-img" />
                                </Link>
                            </li>
                            <hr className="text-white d-none d-sm-block"></hr>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/dashboard"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <MdDashboard className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <CgMenuGridO className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <FaWpforms className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <LiaTableSolid className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <FaMapMarkerAlt className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <MdOutlineWidgets className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <FaChartBar className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <RiCalendar2Line className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <CgMenuGridO className="fs-2" />
                                </Link>
                            </li>
                            <li className="nav-item my-1 text-center">
                                <Link
                                    to="/"
                                    className="nav-link text-white d-flex flex-column justify-content-center align-items-center"
                                    aria-current="page"
                                >
                                    <PiGraduationCapThin className="fs-2" />
                                </Link>
                            </li>
                        </ul>
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default HideSideBar;
