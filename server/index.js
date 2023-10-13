const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/UserModel');

const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/canteen');

app.post('/register', async (req, res) => {
    console.log("hey how you doin figs")
    const { enrollment, name, email, password } = req.body;
        const newUser = new UserModel.User({
            enrollment,
            name,
            email,
            password,
        });

        await newUser.save();
        console.log("User Created successfully")
        res.json({ message: 'User registration successful' });
});

app.listen(3002, () =>{
    console.log("server running");
}) 