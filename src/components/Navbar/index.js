import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to="index.html" className="logo">Car Dealer<em> Website</em></Link>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li><Link to="index.html" className="active">Home</Link></li>
                                    <li><Link to="cars.html">Cars</Link></li>
                                    <li className="dropdown">
                                        <Link className="dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">About</Link>

                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="about.html">About Us</Link>
                                            <Link className="dropdown-item" to="blog.html">Blog</Link>
                                            <Link className="dropdown-item" to="team.html">Team</Link>
                                            <Link className="dropdown-item" to="testimonials.html">Testimonials</Link>
                                            <Link className="dropdown-item" to="faq.html">FAQ</Link>
                                            <Link className="dropdown-item" to="terms.html">Terms</Link>
                                        </div>
                                    </li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>
                                <Link to="#" className='menu-trigger'>
                                    <span>Menu</span>
                                </Link>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}
        </>
    )
}

export default Navbar
