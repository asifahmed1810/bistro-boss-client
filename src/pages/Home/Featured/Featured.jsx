import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredimg from'../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle subheading='check it out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-center bg-slate-400 bg-opacity-40 items-center py-20 px-36'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla, adipisci sapiente velit optio doloribus aliquam laborum repudiandae voluptates, nihil nemo harum nostrum! Sunt, facere repellat corporis voluptate iusto unde quis inventore molestiae eius voluptates reiciendis asperiores veritatis itaque pariatur dolores aliquam exercitationem nulla eveniet laborum velit amet magni ducimus?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;