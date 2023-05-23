import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedCar() {
    return (
        <>
            {/* <!-- ***** Cars Starts ***** --> */}
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Featured <em>Cars</em></h2>
                                <img src="/assetes/line-dec.png" alt="" />
                                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="trainer-item">
                                <div className="image-thumb">
                                    <img src="/assetes/product-1.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <span>
                                        <del><sup>$</sup>11999 </del> &nbsp; <sup>$</sup>11779
                                    </span>

                                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                    <p>
                                        <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                                    </p>

                                    <ul className="social-icons">
                                        <li><Link to="car-details.html">+ View Car</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainer-item">
                                <div className="image-thumb">
                                    <img src="/assetes/product-1.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <span>
                                        <del><sup>$</sup>11999 </del> &nbsp; <sup>$</sup>11779
                                    </span>

                                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                    <p>
                                        <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                                    </p>

                                    <ul className="social-icons">
                                        <li><Link to="car-details.html">+ View Car</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trainer-item">
                                <div className="image-thumb">
                                    <img src="/assetes/product-3.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <span>
                                        <del><sup>$</sup>11999 </del> &nbsp; <sup>$</sup>11779
                                    </span>

                                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                                    <p>
                                        <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                                    </p>

                                    <ul className="social-icons">
                                        <li><Link to="car-details.html">+ View Car</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="main-button text-center">
                        <Link to="cars.html">View Cars</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Cars Ends ***** --> */}

        </>
    )
}

export default FeaturedCar
