import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredimg from'../../../assets/home/featured.jpg'
import './Featured.css'
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle subheading='check it out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-center bg-slate-400 bg-opacity-40 items-center lg:py-20 lg:px-36 max-sm:py-4 max-sm:px-4'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla, adipisci sapiente velit optio doloribus aliquam laborum repudiandae voluptates, nihil nemo harum nostrum! Sunt, facere repellat corporis voluptate iusto unde quis inventore molestiae eius voluptates reiciendis asperiores veritatis itaque pariatur dolores aliquam exercitationem nulla eveniet laborum velit amet magni ducimus?</p>
                    <Link to={'/order/salad'}><button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;