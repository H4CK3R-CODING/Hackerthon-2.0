import User from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    let { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password don't macth" });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hashing Password

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    let newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    if (newUser) {
      // generate jwt token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      // status code 201 means :- created successfully.
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: email,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    let isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }
    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};
