import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularSection from './PopularSection/PopularSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularSection></PopularSection>
        </div>
    );
};

export default Home;