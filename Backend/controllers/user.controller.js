import asyncHandler from "express-async-handler";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken.js";
import User from "../Models/User.model.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { password,email } = req.body;
  
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name,email, password} = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    email,
    name,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc  Logout user
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    expires: new Date(0),
    httpOnly: true,
  });

  res.status(200).json({ message: "User Logged Out" });
});

// @desc  Get user profile
// @route GET /api/users/profile
// @access Private

export { authUser, registerUser, logoutUser };