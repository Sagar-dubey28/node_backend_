import mongoose from "mongoose";

export const userSignup = async (req, res) => {
  res.status(200).json({ message: "i am signup" });
};

export const userLogin = async (req, res) => {
  res.status(200).json({ message: "i am Login" });
};
