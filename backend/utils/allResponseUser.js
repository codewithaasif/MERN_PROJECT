//function for response short
const userResponse = (res,code,bol,message,user)=>{
    res.status(code).json({success:bol,message:message,user})
}
module.exports = userResponse