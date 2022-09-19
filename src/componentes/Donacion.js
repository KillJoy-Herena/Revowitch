import "./Donacion.css";
import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import {Elements,CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import monto from "./Modal";
 const stripePromise = loadStripe( "sk-test")

const CheckoutForm = ()=> {
    const stripe = useStripe();
    const elements = useElements();

const handleSubmit = async (e) => {
e.preventDefault();
 
const {error,paymentMethod} = await stripe.createPaymentMethod({
  type:"card",
  card: elements.getElement(CardElement)
});
if (!error){
  const { id } = paymentMethod;
  const { data } = await axios.post('http://localhost:3001/api/checkout',{
    id,
    amount:4500,
  });
  console.log(data);
} 
};

return <form onSubmit={handleSubmit}>
        <CardElement/>
        <button>pagar</button>
        </form>
} 
 function Donacion(){
    return(
      <div className="tarjeta-elem">
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements> </div>  
    )
}
export default Donacion;