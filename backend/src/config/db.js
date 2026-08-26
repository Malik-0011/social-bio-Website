import mongoose from "mongoose";

const connectDB = async()=>{
    try{ 
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to mongoDb: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.error(`mongoDb connection failed: ${error.message}`)
    }
}
export default connectDB;