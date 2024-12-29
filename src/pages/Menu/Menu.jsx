import React from 'react';
import {Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularSection from '../Home/PopularSection/PopularSection';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularSection></PopularSection>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularSection></PopularSection>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularSection></PopularSection>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularSection></PopularSection>
        </div>
    );
};

export default Menu;