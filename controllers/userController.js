import User from "../models/User.js";

const success = (res, data, message) => {
  return res.status(200).json({
    success: true,
    message,
    data
  });
};

const failure = (res, error) => {
  return res.status(500).json({
    success: false,
    error: error?.message || "Something went wrong"
  });
};

// CREATE ADMIN
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Admin"
    });

    const saved = await user.save();
    return success(res, saved, "Admin created successfully");

  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

// CREATE ALUMNI
export const createAlumni = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Alumni"
    });

    const saved = await user.save();
    return success(res, saved, "Alumni created successfully");

  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

// CREATE STUDENT
export const createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Student"
    });

    const saved = await user.save();
    return success(res, saved, "Student created successfully");

  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email, role });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        error: "Invalid password"
      });
    }

    return success(res, user, `${role} login successful`);

  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return success(res, users, "Users fetched successfully");
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};
