import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register')
    return (
        
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;