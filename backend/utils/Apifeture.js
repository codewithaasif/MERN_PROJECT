class Apifeture{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    };
   
        search(){
            const keyword = this.queryStr.keyword ?{
                name:{
                    $regex:this.queryStr.keyword,
                    $options:'i',
                }
            }:{};
            this.query = this.query.find({...keyword});
            return this
        };
        filter(){
           const queryCopy = {...this.queryStr};
            const removeFields = ['keyword','page','limit'];
            removeFields.forEach((key)=> delete queryCopy[key])
           
            //price filtering
            let allquery = JSON.stringify(queryCopy)
            allquery = allquery.replace(/\b(gt|lt|gte|lte)\b/g ,key=> `$${key}`)
            this.query = this.query.find(JSON.parse(allquery))
             return this
        };
        pagination(resultPerPase){
            const currentPage = Number(this.queryStr.page) || 1;
            const skip = resultPerPase * (currentPage - 1);
            this.query = this.query.limit(resultPerPase).skip(skip)
            return this
        }

}

module.exports = Apifeture