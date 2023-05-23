import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <>



            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="our-classNamees">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Read our <em>Blog</em></h2>
                                <img src="/assetes/line-dec.png" alt="" />
                                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li><Link to='#tabs-1'>Lorem ipsum dolor sit amet, consectetur adipisicing.</Link></li>
                                <li><Link to='#tabs-2'>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</Link></li>
                                <li><Link to='#tabs-3'>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.</Link></li>
                                <div className="main-rounded-button"><Link to="blog.html">Read More</Link></div>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content'>
                                <article id='tabs-1'>
                                    <img src="/assetes/blog-1.jpg" alt="" />
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>

                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

                                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                                    <div className="main-button">
                                        <Link to="blog-details.html">Continue Reading</Link>
                                    </div>
                                </article>
                                <article id='tabs-2'>
                                    <img src="/assetes/blog-2.jpg" alt="" />
                                    <h4>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</h4>
                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>
                                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    <div className="main-button">
                                        <Link to="blog-details.html">Continue Reading</Link>
                                    </div>
                                </article>
                                <article id='tabs-3'>
                                    <img src="/assetes/blog-3.jpg" alt="" />
                                    <h4>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.</h4>
                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>
                                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                                    <div className="main-button">
                                        <Link to="blog-details.html">Continue Reading</Link>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}
        </>
    )
}

export default Blogs
