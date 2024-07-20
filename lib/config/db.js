import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI;

export const ConnectDb = async() =>{
    await mongoose.connect(MONGODB_URI)
    console.log('DB connected')
 
}   