import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,title,img }) => {
    return (
        <div className='pt-8'>
             {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
                  
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 text-black">Order Now</button></Link>
        
        </div>
    );
};

export default MenuCategory;