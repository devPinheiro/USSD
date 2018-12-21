import bodyParser from 'body-parser';
import logger from 'morgan';
import express from 'express';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('This is a short tutorial on USSD app')
});

app.post('*',(req,res) => {

    
    // first level response
    if( text === ""){
        let response = `
        CON Welcome to my simple USSD app. Select optionns from below
        1. My Account
        2. My Number
        `;
    res.send(response)
    } else if( text === '1') {
        // buz logic for first level
       let response = `
       CON CHoose from the options below
       1. Account balance
       2. Account Number
       `;

       res.send(response);
    } else if(text === '2'){
        let phone = '09032487893';
        let response = `END Your phone number is ${phone}`
        res.send(response);
    } else if(text === '1*1'){
        let balance = 10000;
        let response = `END Your accout balance is N${MAth.floor(balance)}`
        res.send(response);
    } else if(text === '1*2'){
        let account = 1289228390;
        let response = `END Your accout balance is ${account}`
        res.send(response);
    } else {
        res.status(400).send('Bad request');
    }
});

app.listen(3000, () => {
    console.log(`server running on port 3000`);
})

