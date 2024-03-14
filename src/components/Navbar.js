import React from 'react'
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TfiViewListAlt } from "react-icons/tfi";

const Navbar = ({ toggleAdditionalSidebar, showAdditionalSidebar }) => {
    const iconVisible = showAdditionalSidebar;
    console.log(iconVisible)
    return (
        <nav className="nav-margin">
            <div className="d-flex flex-row">
                <div>
                    {iconVisible ? (
                        <TfiViewListAlt className='fs-1  p-2 pointer bg-white' onClick={toggleAdditionalSidebar} />
                    ) : (
                        <PiDotsThreeCircleVertical className='fs-1 bg-white rounded-5 pointer' onClick={toggleAdditionalSidebar} />
                    )}
                    <span className='ms-3'>Dashboard</span>
                </div>
                <div className='ms-auto me-5'>
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
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            </div>
            {/* </div> */}
        </nav >
    )
}

export default Navbar
