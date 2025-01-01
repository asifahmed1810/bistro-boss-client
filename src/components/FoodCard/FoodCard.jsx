import React from 'react';

const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
                   
            </figure>
            <p className='absolute bg-slate-900 right-0 mr-4 mt-4 p-1 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;