const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

const stripe = new Stripe('') 
app.use(cors({origin:'http://localhost:3000'}))

 app.use(express.json())

app.post('/api/checkout', async (req, res) => {
     const {id, amount } =  req.body
     const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description:"Donacion RW",
        payment_method: id,
        confirm: true
    });
    console.log(payment)
    res.send( 'Pago recibido!')
})
app.listen(3001,()=>{console.log('Server on port',3001)
})