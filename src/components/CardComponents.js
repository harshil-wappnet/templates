import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { FaStoreAlt } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { TbSofa } from "react-icons/tb";
import { CiWarning } from "react-icons/ci";
import { FaTag } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";

const CardComponents = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className='row row-cols-lg-4 row-cols-1 row-cols-md-2 gy-5'>
                <div className='col'>
                    <div className='card'>
                        <div className='d-flex flex-row'>
                            <div className="Card-Component-globebox rounded-3 bg-sofa">
                                <TbSofa className='fs-3 fw-bolder text-white' />
                            </div>
                            <div className='d-flex flex-column ms-auto'>
                                <span className='fw-light fs-5 mx-3'>Bookings</span>
                                <span className='align-self-end mx-3 fs-4'>184</span>
                            </div>
                        </div>
                        <hr className="text-dark d-none d-sm-block mx-3"></hr>
                        <div className='d-flex flex-row align-items-center mx-3 gap-1'>
                            <CiWarning />
                            <span className='fw-light fs-6'>Get more space</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='d-flex flex-row'>
                            <div className="Card-Component-globebox rounded-3 bg-graph">
                                <VscGraph className='fs-3 fw-bolder text-white' />
                            </div>

                            <div className='d-flex flex-column ms-auto'>
                                <span className='fw-light fs-5 mx-3'>Website Visits</span>
                                <span className='align-self-end mx-3 fs-4'>75.521</span>
                            </div>
                        </div>
                        <hr className="text-dark d-none d-sm-block mx-3"></hr>
                        <div className='d-flex flex-row align-items-center mx-3 gap-1'>
                            <FaTag />
                            <span className='fw-light fs-6'>Tracked from google analytics</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='d-flex flex-row'>
                            <div className="Card-Component-globebox rounded-3">
                                <FaStoreAlt className='fs-3 fw-bolder text-white' />
                            </div>
                            <div className='d-flex flex-column ms-auto'>
                                <span className='fw-light fs-5 mx-3'>Revenue</span>
                                <span className='align-self-end mx-3 fs-4'>$34,245</span>
                            </div>
                        </div>
                        <hr className="text-dark d-none d-sm-block mx-3"></hr>
                        <div className='d-flex flex-row align-items-center mx-3 gap-1'>
                            <CiCalendar />
                            <span className='fw-light fs-6'>Last 24 Hours</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='d-flex flex-row'>
                            <div className="Card-Component-globebox rounded-3 bg-followers">
                                <SiTwitter className='fs-3 fw-bolder text-white' />
                            </div>
                            <div className='d-flex flex-column ms-auto'>
                                <span className='fw-light fs-5 mx-3'>Followers</span>
                                <span className='align-self-end mx-3 fs-4'>+245</span>
                            </div>
                        </div>
                        <hr className="text-dark d-none d-sm-block mx-3"></hr>
                        <div className='d-flex flex-row align-items-center mx-3 gap-1'>
                            <MdOutlineUpdate />
                            <span className='fw-light fs-6'>Get more space</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponents
