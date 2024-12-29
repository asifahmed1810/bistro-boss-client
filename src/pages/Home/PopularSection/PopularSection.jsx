import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularSection = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category ==='popular');
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category ==='popular')
    //         setMenu(popularItems)})
    // },[])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading={'From Our Menu'}
            subheading={'Popular Items'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularSection;