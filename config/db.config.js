import mongoose from "mongoose";

const dbConnect = () => {
  mongoose.connect(process.env.DB)
    .then(() => { 
      console.log('MongoDB connected successfully'); 
    })
    .catch((error) => { 
      console.log('MongoDB connection error:', error.message); 
    });
};


export default dbConnect
