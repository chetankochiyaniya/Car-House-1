import React from 'react';
import AboutUS from '../Home/AboutUs';
import Blogs from '../Home/Blogs';
import Contact from '../Home/Contact';
import FeaturedCar from '../Home/FeaturedCar';
import MainBanner from '../Home/MainBanner';

function Home() {
    return (
        <>
            <MainBanner />
            <FeaturedCar />
            <AboutUS />
            <Blogs />
            <Contact />
        </>
    );
}

export default Home;
