import User from "../models/User.js";

// success / failure helpers
const success = (res, data, message) => res.status(200).json({ success: true, message, data });
const failure = (res, error) => res.status(500).json({ success: false, error: error?.message || "Something went wrong" });

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ success: false, error: "Email already registered" });

    const user = new User({ name, email, password, role: "Admin" });
    const saved = await user.save();
    return success(res, saved, "Admin created successfully");
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

export const createAlumni = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ success: false, error: "Email already registered" });

    const user = new User({ name, email, password, role: "Alumni" });
    const saved = await user.save();
    return success(res, saved, "Alumni created successfully");
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ success: false, error: "Email already registered" });

    const user = new User({ name, email, password, role: "Student" });
    const saved = await user.save();
    return success(res, saved, "Student created successfully");
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) return res.status(400).json({ success: false, error: "Missing credentials" });

    const user = await User.findOne({ email, role });
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    if (user.password !== password) return res.status(401).json({ success: false, error: "Invalid password" });

    // NOTE: For production add JWT and don't return the password
    const userSafe = { _id: user._id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt };
    return success(res, userSafe, `${role} logged in successfully`);
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return success(res, users, "Users fetched successfully");
  } catch (error) {
    console.log(error);
    return failure(res, error);
  }
};
