const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    shufflePB: {
        type: Number,
        default: 0,
        required: false,
    }
})


const User = mongoose.model('users', userSchema)
module.exports = User;