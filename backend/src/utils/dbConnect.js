import mongoose from "mongoose";
let isConnected = false;
const DBConnect = async () =>{
    if(isConnected) return;
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("DB Connected successfully");
            isConnected = true;
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
}

export default DBConnect;