import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
            <hr className="text-dark d-none d-sm-block" ></hr>
            <footer className='ml-300'>
                <div className='d-flex flex-row justify-content-evenly'>
                    <div className='me-auto'>
                        <ul className='list-unstyled d-flex flex-row gap-5'>
                            <li className='f-12 fw-medium'>CREATIVE TIM</li>
                            <li className='f-12 fw-medium'>ABOUT US</li>
                            <li className='f-12 fw-medium'>BLOG</li>
                            <li className='f-12 fw-medium'>LICENSES</li>
                        </ul>
                    </div>
                    <span className='fw-light me-5'>
                        &copy;2024, made with <FaHeart /> by Creative Tim for a better web.
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
