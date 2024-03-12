import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import "bootstrap/js/dist/dropdown";
import { MdOutlineWidgets } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import "bootstrap/js/dist/collapse";
import { CiClock2 } from "react-icons/ci";
import chart from "../images.jpg";
import { MdRefresh } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Template1 = () => {
    const [dropdownStates, setDropdownStates] = useState(false);

    const toggleDropdown = (dropdownName) => {
        setDropdownStates({
            [dropdownName]: !dropdownStates[dropdownName]
        });
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-sm-2 sidebar d-flex flex-column justify-content-between min-vh-100">
                    <div className="mt-2">
                        <Link
                            className="text-decoration-none ms-4 d-flex text-white d-none align-items-center d-sm-inline"
                            role="button"
                            to="/"
                        >
                            <span className="fs-5">CREATIVE TIM</span>
                        </Link>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <ul className="nav nav-pills flex-column  " id="parentM">
                            <li className="nav-item  my-1">
                                <Link
                                    to="/"
                                    className="nav-link text-white"
                                    aria-current="page"
                                >
                                    <MdDashboard />
                                    <span className="ms-2">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item  my-1 ">
                                <Link
                                    to="/"
                                    onClick={() => toggleDropdown('products')}
                                    className="nav-link text-white"
                                    data-bs-toggle="collapse"
                                    aria-current="page"
                                >
                                    <FaProductHunt />
                                    <span className="ms-2">Products</span>
                                    <i className="bi bi-chevron-up ms-3"></i>
                                </Link>
                                <ul
                                    className={`nav collapse ms-2 flex-column ${dropdownStates.products ? "show" : ""}`}
                                    data-bs-parent="#parentM"
                                >
                                    <li className="nav-item ">
                                        <Link
                                            className="nav-link text-white "
                                            to="/"
                                            aria-current="page"
                                        >
                                            Item 1
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-white" to="/">
                                            Item 2
                                        </Link>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item  my-1">
                                <Link
                                    to="/"
                                    onClick={() => toggleDropdown('widgets')}
                                    className="nav-link text-white"
                                    aria-current="page"
                                >
                                    <MdOutlineWidgets />
                                    <span className="ms-2">Widgets</span>
                                    <i className="bi bi-chevron-up ms-3"></i>
                                </Link>
                                <ul
                                    className={`nav collapse ms-2 flex-column ${dropdownStates.widgets ? "show" : ""}`}
                                    data-bs-parent="#parentM"
                                >
                                    <li className="nav-item ">
                                        <Link
                                            className="nav-link text-white "
                                            to="/"
                                            aria-current="page"
                                        >
                                            Item 1
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-white" to="/">
                                            Item 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  my-1">
                                <Link
                                    onClick={() => toggleDropdown('charts')}
                                    to="/"
                                    className="nav-link text-white"
                                    aria-current="page"
                                >
                                    <FaChartBar />
                                    <span className="ms-2">Charts</span>
                                    <i className="bi bi-chevron-up ms-3"></i>

                                </Link>
                                <ul
                                    className={`nav collapse ms-2 flex-column ${dropdownStates.charts ? "show" : ""}`}
                                    data-bs-parent="#parentM"
                                >
                                    <li className="nav-item ">
                                        <Link
                                            className="nav-link text-white "
                                            to="/"
                                            aria-current="page"
                                        >
                                            Item 1
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-white" to="/">
                                            Item 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <Link
                            className="btn border-none dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <CgProfile className="fs-5" />
                            <span className="fs-5 ms-3"> Harshil</span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <Link className="dropdown-item" to="/">
                                Action
                            </Link>
                            <Link className="dropdown-item" to="/">
                                Disabled action
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 d-flex flex-row gap-3 align-items-center">
                    <div className="row">
                        <div className="col-4">
                            <div className="card cards">
                                <div className="imgbox">
                                    <img
                                        src={chart}
                                        className="card-img-top"
                                        alt="chart here 1"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-row gx-5 justify-content-evenly content">
                                        <MdRefresh />
                                        <MdEdit />
                                    </div>
                                    <h5 className="card-title">Website Views</h5>
                                    <p className="card-text">Last Campaign Performance</p>
                                    <div>
                                        <CiClock2 />
                                        <span>campaign sent 2 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template1;
