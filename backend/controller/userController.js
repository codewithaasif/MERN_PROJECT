const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')
const userResponse = require('../utils/allResponseUser')

//Resistorar user
const userResistor = async (req, res, next) => {
    try{
        const{name,email,password} = req.body
       const user = await User.create({
            name,email,password,
            avatar:{ public_id:'sampale public id',url:'sample url'},
       })
        //response by jwt file
       sendToken(user,201,res)
    }catch(error){
        userResponse(res,500,false,'something went rong')
        console.log('error in resistor page',error.message)
    }
}


//login user
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            userResponse(res, 400, false, 'required all filds email & password')
        }
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            userResponse(res, 400, false, 'invalid email & password user not exist')
        } else {
            const isPasswordMatch = await user.comparePassword(password)
            if (!isPasswordMatch) {
                userResponse(res, 400, false, 'invalid email & password')
            } else {
                //response by jwt file
                sendToken(user, 200, res)
            }
        }



    }
    catch (error) {
        userResponse(res, 400, false, 'something went rong')
        console.log('error in login api', error.message)
    }
}



module.exports = { userResistor, loginUser }