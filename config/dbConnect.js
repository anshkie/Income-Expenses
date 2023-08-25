const mongoose=require('mongoose');
//
const dbConnect=async(req,res)=>{
    try{
        await mongoose.connect('mongodb+srv://anshgup444:swatigupta1011@cluster0.0sknds6.mongodb.net/?retryWrites=true&w=majority');
        console.log('Db connected')
    }catch(error){
        console.log(error.message);
        process.exit(1)
    }
}
dbConnect()