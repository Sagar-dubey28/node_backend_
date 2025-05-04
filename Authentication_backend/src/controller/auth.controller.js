import User from "../model/auth.model.js";

export const userSignup = async (req, res) => {
  const{ name,email,password,role } = req.body;

  res.status(200).json({success:true, message: "Signup succesfully" });
};

export const userLogin = async (req, res) => {
  res.status(200).json({ message: "i am Login" });
};
