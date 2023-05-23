import React from 'react'
import { Link } from 'react-router-dom'

function MainBanner() {
    return (
        <>
            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src="/assetes/video.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Lorem ipsum dolor sit amet</h6>
                        <h2>Best <em>car dealer</em> in town!</h2>
                        <div className="main-button">
                            <Link to="contact.html">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** --> */}
        </>
)}

export default MainBanner
