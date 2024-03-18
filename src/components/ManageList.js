import React from 'react'
import managelist1 from '../assets/images/managelist1.jpg'
import managelist2 from '../assets/images/managelist2.jpg'
import managelist3 from '../assets/images/managelist3.jpg'
import { CiEdit } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineViewArray } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ManageList = () => {
    return (
        <div className='container-fluid mt-5'>
            <h3>Manage List</h3>
            <div className='row mt-5'>
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards w-100">
                        <div className="imgbox">
                            <img
                                src={managelist1}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
                            <div className="d-flex flex-row gx-5 justify-content-evenly content">
                                <MdOutlineViewArray />
                                <CiEdit />
                                <CiCircleRemove />
                            </div>
                            <h5 className="card-title align-self-center">Cozy 5 Stars Apartment</h5>
                            <p className="card-text fw-lighter">The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</p>
                            <hr className="text-dark d-none d-sm-block"></hr>
                            <div className='d-flex flex-row justify-content-between'>
                                <span>$899/night</span>
                                <span><CiLocationOn />Barcelona,Spain</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards w-100">
                        <div className="imgbox">
                            <img
                                src={managelist2}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
                            <div className="d-flex flex-row gx-5 justify-content-evenly content">
                                <MdOutlineViewArray />
                                <CiEdit />
                                <CiCircleRemove />
                            </div>
                            <h5 className="card-title">Office Studio</h5>
                            <p className="card-text fw-lighter">The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.</p>
                            <hr className="text-dark d-none d-sm-block"></hr>
                            <div className='d-flex flex-row justify-content-between'>
                                <span>$1.199/night</span>
                                <span><CiLocationOn />London,UK</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 flex-column flex-lg-row mt-5 mt-lg-0">
                    <div className="card cards w-100">
                        <div className="imgbox">
                            <img
                                src={managelist3}
                                className="card-img-top"
                                alt="chart here 1"
                            />
                        </div>
                        <div className="p-0 m-0">
                            <div className="d-flex flex-row gx-5 justify-content-evenly content">
                                <MdOutlineViewArray />
                                <CiEdit />
                                <CiCircleRemove />
                            </div>
                            <h5 className="card-title">Beautiful Castle</h5>
                            <p className="card-text fw-lighter">The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.</p>
                            <hr className="text-dark d-none d-sm-block"></hr>
                            <div className='d-flex flex-row justify-content-between'>
                                <span>$459/night</span>
                                <span><CiLocationOn />Milan,Italy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageList
