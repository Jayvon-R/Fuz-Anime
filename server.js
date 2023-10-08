const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/register', cors(), (req, res) => {

})

app.post('/register', async(req, res) => {
    const { user, password } = req.body;

    try{
        const check = await collection.findOne({ user: user });

        if(check){
            res.json("User already exists")
        }
    }
    catch {

    }
})