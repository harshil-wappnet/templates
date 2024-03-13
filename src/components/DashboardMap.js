import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import US from "../assets/images/US.webp"
import GER from "../assets/images/ger.webp"
import UK from "../assets/images/UK.webp"
import AUS from "../assets/images/AU.webp"
import RO from "../assets/images/RO.png"
import BR from "../assets/images/BR.webp"
const DashboardMap = () => {
    return (
        <div className='bg-white rounded mt-5 container-fluid'>
            <div className='d-flex flex-row'>
                <div className="globebox rounded-3">
                    <RiGlobalLine className='fs-3 fw-bolder text-white' />
                </div>
                <span className='fw-light fs-5 mx-3 pb-4'>Global Sales by Top Locations</span>
            </div>
            <div className='row flex-lg-row flex-column '>
                <div className='col d-flex  align-items-center position-relative mx-3'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={US} alt="US-flag" className='img-flag' />
                                <span className='m-6 fw-light fs-6'>USA</span>
                            </div>
                            <div className='d-flex flex-row p-us-6'>
                                <span className='fw-light fs-6'>2.920</span>
                                <span className='m-6 fw-light fs-6'>53.23%</span>
                            </div>
                        </div>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={GER} alt="GER-flag" className='img-flag' />
                                <span className='m-6 fw-light fs-6'>Germany</span>
                            </div>
                            <div className='d-flex flex-row p-ger-6'>
                                <span className='fw-light fs-6'>1.300</span>
                                <span className='m-6 fw-light fs-6'>20.43%</span>
                            </div>
                        </div>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={AUS} alt="AUS-flag" className='img-flag' />
                                <span className='m-6 fw-light fs-6'>Australia</span>
                            </div>
                            <div className='d-flex flex-row p-aus-6'>
                                <span className='fw-light fs-6'>0760</span>
                                <span className='m-6 fw-light fs-6'>10.35%</span>
                            </div>
                        </div>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={UK} alt="UK-flag" className='img-flag' />
                                <span className=' m-6 fw-light fs-6'>United Kingdom</span>
                            </div>
                            <div className='d-flex flex-row p-uk-6'>
                                <span className='fw-light fs-6'>0690</span>
                                <span className='m-6 fw-light fs-6'>7.87%</span>
                            </div>
                        </div>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={RO} alt="RO-flag" className='img-flag' />
                                <span className='m-6 fw-light fs-6'>Romania</span>
                            </div>
                            <div className='d-flex flex-row p-rom-6'>
                                <span className='fw-light fs-6'>0600</span>
                                <span className='m-6 fw-light fs-6'>5.94%</span>
                            </div>
                        </div>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-row'>
                                <img src={BR} alt="BR-flag" className='img-flag' />
                                <span className='m-6 fw-light fs-6'>Brazil</span>
                            </div>
                            <div className='d-flex flex-row p-br-6'>
                                <span className='fw-light fs-6'>0550</span>
                                <span className='m-6 fw-light fs-6'>4.34%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    Map Here
                </div>
            </div>
        </div>
    )
}

export default DashboardMap
