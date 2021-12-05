const mongoose=require('mongoose')
const connectdb=()=>{
    mongoose.connect('mongodb://localhost/persondata',()=>{
        try{
            console.log('database is connected')
        }catch{
            console.log('database is not connected ')
        }
    })
}
module.exports=connectdb;
