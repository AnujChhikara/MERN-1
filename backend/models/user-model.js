const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

})

// secruing password with bcrypt
userSchema.pre('save' , async function (next){
    const user =this;
    
    if(!user.isModified('password')) {
        next()
    }

    try {
        const saltRounds = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, saltRounds)
        user.password = hashedPassword
        
    } catch (error) {
        next(error)
        
    }
})


// json web token

userSchema.methods.generateToken =async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        },
        process.env.JWT_SECRET,{
            expiresIn:'30d'
        })
        
    } catch (error) {
        console.log(error)
        
    }


}

// Comparing password

userSchema.methods.comparePassword = async function(password){
    try {
        const isPasswordValid = await bcrypt.compare( password,this.password)
        return isPasswordValid;
        
    } catch (error) {
        console.log(error)
    }

}


const User = new mongoose.model('User' , userSchema)

module.exports = User