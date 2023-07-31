import { Request, Response } from "express";
import { User } from "../models/user.model";

//importing bcrypt for hashing & decrypt the password
import bcrypt from "bcrypt";

//importing jwt for token
import jwt from "jsonwebtoken";


// Registering User
export const registerUser = async (req: Request, res: Response) => {
  try {
    //getting email and password from body
    const { email, password } = req.body;
    console.log(email, password);

    //checking for email and password both are required
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    // Checking if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hashing the password
    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltrounds);

    // Creating the new user
    const newUser = await User.create({ email, password: hashedPassword });
    console.log(process.env.JWT_SECRET!);
    // Generating JWT token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET!,
      {
        //expiration time for token
        expiresIn: "1h",
      }
    );

    // Providing response
    res.json({ message: "Registration Done Sucessfully", Token: accessToken });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Loging user
export const loginUser = async (req: Request, res: Response) => {
  try {
    //getting email and password from body
    const { email, password } = req.body;

    //checking for email and password both are required
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hash password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generating JWT token
    const accessToken = jwt.sign({ userId: user._id }, "Thinkwink_Practical", {
      expiresIn: "1h",
    });

    // Providing response
    res.json({ message: "Login Successfull", Token: accessToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
