import mongoose from "mongoose"

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://0.0.0.0/food-delivery')
        console.log("mongodb connected")
    } catch (error) {
        console.log("error in api")
    }
}
export default connectDB