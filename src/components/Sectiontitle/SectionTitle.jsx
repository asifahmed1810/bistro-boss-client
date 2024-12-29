import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 mb-4'>
            <p className='text-yellow-500'>----{subheading}----</p>
            <h2 className='text-4xl uppercase border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;