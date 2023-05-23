import React from 'react';
import AboutUS from '../AboutUs';
import Blogs from '../Blogs';
import Contact from '../Contact';
import FeaturedCar from '../FeaturedCar';
import Footer from '../Footer';
import MainBanner from '../MainBanner';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <MainBanner />
            <FeaturedCar />
            <AboutUS />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
