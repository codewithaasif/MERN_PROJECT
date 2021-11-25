class Apifeture{
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }
   
        search(){
            const keyword = this.queryStr.keyword ?{
                name:{
                    $regex:this.queryStr.keyword,
                    $options:'i',
                },
            }:{}
            return this.query.find({...keyword})
            //  return this
        }
        filter(){
           const queryCopy = {...this.queryStr}
           console.log(queryCopy)
            const removeFields = ['keyword','page','limit'];
            removeFields.forEach((key)=> delete queryCopy[key])
            console.log(queryCopy)
            return this.query.find(queryCopy)
            
            // return this
        }
}

module.exports = Apifeture