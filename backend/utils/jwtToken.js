
const sendToken = (user,statusCode,res) =>{
    let token = user.getJwtToken()

    //option for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success:true,
        message:'you are successfully login',
        user,
        token
    })
}

module.exports = sendToken