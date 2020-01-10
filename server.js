const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
var admin = require('firebase-admin');
var serviceAccount = require('./clothing-prod-firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://clothing-prod.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("/checkout");
    ref.once("value", function(snapshot) {
        console.log(db);
      });




if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')("sk_test_QNbRO2ywsiIWMdAXCf2RZYxr00Cm9mD8pX");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
        app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount, 
        currency: 'usd',
    };
    console.log(req.body);
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({sucess: stripeRes});
        }
        
    })
})

