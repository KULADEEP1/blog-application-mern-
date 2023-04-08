import mongoose from 'mongoose'



const Connection= async(username,password)=>{
    const URL = `mongodb+srv://admin:admin@blog-app.52erq8f.mongodb.net/blog-app?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('db connected successfully')

    }catch(err){
         console.log('error while connecting whith db check here -->', err)
    }
}


export default Connection