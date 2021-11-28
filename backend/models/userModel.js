const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter Your Name'],
        maxLength:[25,'Name Cannot exceed 25 characters'],
        minLength:[4,'Name should have more then 4 characters']
    },
    email:{
        type:String,
        required:[true,'Please Enter Your Email'],
        unique:[true,'Please Enter uniqe Email'],
        validate:[validator.isEmail,'Please Enter a valid Email']
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Password'],
        minLength:[8,'Password should be greater then 8 characters'],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    role:{
        type:String,
        default:'user',
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})



//before save user data chek for password if password not change then its not hash password and if password is chage then it agin hash password
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})



//jwt token create
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

//compare password
userSchema.methods.comparePassword = async function(enteradPassword){
    return await bcrypt.compare(enteradPassword,this.password)
}

module.exports = mongoose.model('user',userSchema)