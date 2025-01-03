import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularSection from './PopularSection/PopularSection';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularSection></PopularSection>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;