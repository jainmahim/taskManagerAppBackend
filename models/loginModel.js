import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password:{
        type:String,
        required:true,
    },
  });
  const users = mongoose.model("users", userSchema);
  export default users;