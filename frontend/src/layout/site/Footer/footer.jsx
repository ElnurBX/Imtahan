
import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <footer className='mt-5 pt-5 pb-5 footer'>
            <div className="container">
                <div className="row">
                 <div className="col-2">
                        <img className='w-100' src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
                        </div> 
                        <div className="col-8">
                        <span>The floristry business has a significant market in the corporate and social event world, as flowers</span>
                </div>
                <div className="col-2 icons d-flex ">

                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>

                </div>
              
                </div>
                <div className="row mt-3">
                    <div className="container d-flex  p-5  border col-md-4 p-3">
                        <div className="col-6">
                            <h3>Company</h3>
                            <ul>
                                <li>About us</li>
                                <li>Servcies</li>
                            <li>Contact us</li>
                        </ul>
                        </div>
                        <div className="col-6 ">
                        <h3>Company</h3>
                            <ul>
                                <li>About us</li>
                                <li>Servcies</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 border p-5">
                        <h3>Newletter</h3>
                        <p>Subcribe to our newsletter to get more free tips. No Spam, Promise.</p>
                        <div className="input">
                        <input type="text " placeholder='Emial' className='' name="" id="" />
                        <button className='btn fw-bold'>Subscirbe</button>
                        </div>
                    
                    </div>
                    <div className="col-12 col-md-4  p-5 border">
                        <h3>Get in touch</h3>
                       <span> 69 North Cleveland Street, Memphis,USA.</span>
                    <span></span>(123) 8111 9210 - (012) 1111 6868
                    <span>Florisr@supportthem.com</span>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer