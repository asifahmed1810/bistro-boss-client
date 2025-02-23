import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
// import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subheading={'Please Pay to Eat'}></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>
                 <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;