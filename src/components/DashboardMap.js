import React, { useState } from 'react'
import { RiGlobalLine } from "react-icons/ri";
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { CiClock2 } from "react-icons/ci";
import pie from '../assets/images/pie.png'
import histogram from '../assets/images/histogram.png'
import { MdRefresh } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CardComponents from "../components/CardComponents";
import ManageList from "../components/ManageList";
import WorldDataTable from './WorldDataTable';

const DashboardMap = () => {
    const [selectedCountry, setSelectedCountry] = useState();

    const handleCountryClick = (event, code) => {
        console.log("Clicked country code:", code);
        setSelectedCountry(code);
    };

    const regionStyle = {
        initial: { fill: '#686868' },
        selected: { fill: '#686868' }
    };

    // Update the regionStyle for the selected country
    if (selectedCountry) {
        regionStyle[selectedCountry] = { fill: '#fff' };
    }
    return (
        <div className='rounded mt-5'>
            <div className='bg-white rounded shadow'>
                <div className='d-flex flex-row mx-3'>
                    <div className="globebox rounded-3">
                        <RiGlobalLine className='fs-3 fw-bolder text-white' />
                    </div>
                    <span className='fw-light fs-5 mx-3 pb-4'>Global Sales by Top Locations</span>
                </div>
                <div className='row flex-lg-row flex-column p-4'>
                    <div className='col align-items-center position-relative mx-3'>
                        <WorldDataTable />
                    </div>
                    <div className='col align-items-center justify-content-center p-3 '>
                        <VectorMap
                            map={worldMill}
                            regionStyle={regionStyle}
                            backgroundColor='white'
                            onRegionSelected={handleCountryClick}
                        />
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
