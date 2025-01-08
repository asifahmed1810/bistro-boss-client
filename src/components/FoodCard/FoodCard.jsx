import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe,_id } = item;
    const { user } = useContext(AuthContext);
    const location=useLocation();
    
    const navigate=useNavigate();
    const axiosSecure=useAxiosSecure();

    const [cart,refetch]=useCart();


    const handleAddtoCart = () => {
        // console.log(food,user.email)
        if (user && user.email) {
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your card`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart items count
                    refetch();
                }
            })

        } else {
            
            
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                }
            });
        }
    }
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
                    <button onClick={handleAddtoCart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;



   