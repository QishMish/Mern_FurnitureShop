const mongoose = require("mongoose");

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        require:[true, 'you must provide Email'],
        unique: true,
        lowercase: true,
        // validate:[validateEmail, "Please Enter Valid Email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim:true
    },
    password:{
        type:String,
        require:[true, 'you must provide Password'],
        trim:true
    }
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);