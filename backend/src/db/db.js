import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log('\n connection with DB successful: ', conn.connection.host);

        
    } catch (error) {
        console.error('connection to DB failed : ', error);
        process.exit(1)
    }
}

export default connectDB;