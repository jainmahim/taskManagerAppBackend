import users from "../models/loginModel.js";
import express from "express";
const router = express.Router();

export const login = async(req,res)=>{
    try {
      const check = await users.findOne({ email: req.body.email, password:req.body.password });
      console.log(check);
      if (check) {
        res.cookie("email", req.body.email, { httpOnly: true });
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } catch (e) {
      res.json("fail");
      console.log(e);
    }
};

// signup
export const signup = async(req,res)=>{
  const user_details = {
    email: req.body.email,
    password:req.body.password,
  };
  console.log("email: " + user_details.email);
  console.log("password: " + user_details.password);
  console.log(users)
    try {
    const check = await users.findOne({ email: req.body.email });
    console.log("check: " + check);
    if (check) {
      res.json("exist");
    } else {
      await users.insertMany([user_details]);
      res.json("registered");
    }
  } catch (e) {
    res.json(e);
    console.log(e);
  }

}
  