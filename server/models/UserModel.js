const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        enrollment : String,
        name : String, 
        email : String,
        password : String
    }
)

const User = mongoose.model('users', UserSchema);

async function findUserByEmail(email){
    return User.findOne({email}).exec()
}

module.exports = {User, findUserByEmail}