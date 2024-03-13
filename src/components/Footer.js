import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='d-flex flex-row justify-content-between'>
                <div className=''>
                    <ul className='list-unstyled d-flex flex-row gap-5'>
                        <li className='f-12 fw-medium'>CREATIVE TIM</li>
                        <li className='f-12 fw-medium'>ABOUT US</li>
                        <li className='f-12 fw-medium'>BLOG</li>
                        <li className='f-12 fw-medium'>LICENSES</li>
                    </ul>
                </div>
                <span className='fw-light'>
                    &copy;2024, made with <FaHeart /> by Creative Tim for a better web.
                </span>
            </div>
        </div>
    )
}

export default Footer
