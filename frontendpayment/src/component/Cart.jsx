import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cart() {
    const {id} = useParams();
    const subtotal=100;
    useEffect(()=>{
        makepayment();
    })
    const makepayment = async () => {
        if (Math.round(subtotal) !== 0) {
            const stripe = await loadStripe("pk_test_51NopitSJ60SygxplnqXdvdBzZ88SA9g1eLhATSLGgZrPNHNYWebcb4FStx1aqEoDWlSz7GGIKkhmDEh4FBNLm1BZ00c35qlSzc");
            const body = {
                products: Math.round(subtotal)
            }
            const headers = {
                "Content-Type": "application/json"
            }
            const response = await fetch('https://paystripe.vercel.app/api/create-checkout-session', {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            const session = await response.json();
            console.log(session)
            const result = stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
               
               console.log("error");
            }
        }
        
    }
    return (
        <>
            <div>
            
            </div>
        </>
    );
}