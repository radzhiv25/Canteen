const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/UserModel');

const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/canteen');

app.post('/register', async (req, res) => {
    // console.log("hey how you doin figs")
    const { enrollment, name, email, password } = req.body;
        const newUser = new UserModel.User({
            enrollment,
            name,
            email,
            password,
        });

        await newUser.save();
        // console.log("User Created successfully")
        res.json({ message: 'User registration successful' });
});

app.post('/login', async(req, res) => {
    // console.log("Hey signed up user");
    const{email, password} = req.body;
    
    const user = await UserModel.findUserByEmail(email);
    // console.log(user)
    if(user){
        console.log(user.password, user.email, password)
        if(user.password === password){
            res.json("Success");
        }
        else{
            res.json("Password and Email do not match");
        }
    }
    else{
        res.json("No user found");
    }
})

app.listen(3002, () =>{
    console.log("server running");
}) 