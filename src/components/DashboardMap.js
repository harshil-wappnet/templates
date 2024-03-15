import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import US from "../assets/images/US.webp"
import GER from "../assets/images/ger.webp"
import UK from "../assets/images/UK.webp"
import AUS from "../assets/images/AU.webp"
import RO from "../assets/images/RO.png"
import BR from "../assets/images/BR.webp"
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { CiClock2 } from "react-icons/ci";
import pie from '../assets/images/pie.png'
import histogram from '../assets/images/histogram.png'
import { MdRefresh } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CardComponents from "../components/CardComponents";
import ManageList from "../components/ManageList";

const DashboardMap = () => {
    return (
        <div className='rounded mt-5'>
            <div className='bg-white rounded shadow'>
                <div className='d-flex flex-row mx-3'>
                    <div className="globebox rounded-3">
                        <RiGlobalLine className='fs-3 fw-bolder text-white' />
                    </div>
                    <span className='fw-light fs-5 mx-3 pb-4'>Global Sales by Top Locations</span>
                </div>
                <div className='row flex-lg-row flex-column py-4'>
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
                            <hr className="text-dark d-none d-sm-block"></hr>
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
                            <hr className="text-dark d-none d-sm-block"></hr>
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
                            <hr className="text-dark d-none d-sm-block"></hr>
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
                            <hr className="text-dark d-none d-sm-block"></hr>
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
                            <hr className="text-dark d-none d-sm-block"></hr>
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
                    <div className='col align-items-center justify-content-center p-3 '>
                        <VectorMap map={worldMill} regionStyle={{ initial: { fill: '#cccccc' } }} backgroundColor='white' />
                    </div>
                </div>
            </div>
            {/* Animated Cards */}
            <div className="row mt-5">
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards">
                        <div className="imgbox">
                            <img
                                src={pie}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
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
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards">
                        <div className="imgbox">
                            <img
                                src={pie}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
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
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards">
                        <div className="imgbox">
                            <img
                                src={histogram}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
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
            <CardComponents />
            <ManageList />
        </div>
    )
}

export default DashboardMap
