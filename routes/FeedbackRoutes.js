import express from "express";
import {
  createAdmin,
  createAlumni,
  createStudent,
  loginUser,
  getAllUsers
} from "../controllers/userController.js";

const router = express.Router();

// SIGNUP
router.post("/admin/create", createAdmin);
router.post("/alumni/create", createAlumni);
router.post("/student/create", createStudent);

// LOGIN
router.post("/login", loginUser);

// USERS LIST
router.get("/user/get", getAllUsers);

export default router;
