import express from "express";

import {
  createAdmin,
  createAlumni,
  createStudent,
  loginUser,
  getAllUsers
} from "../controllers/userController.js";

import {
  createCompany,
  getCompanies
} from "../controllers/companyController.js";

import {
  createReview,
  getAllReviews
} from "../controllers/reviewsController.js";

import { likeReviews } from "../controllers/likesController.js";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router();

// SIGNUP
router.post("/admin/create", createAdmin);
router.post("/alumni/create", createAlumni);
router.post("/student/create", createStudent);

// LOGIN
router.post("/login", loginUser);

// COMPANY
router.post("/company/create", isAdmin, createCompany);
router.get("/company/get", getCompanies);

// REVIEWS
router.post("/review/create", createReview);
router.post("/like/add", likeReviews);
router.get("/reviews/all", getAllReviews);

// USERS
router.get("/user/get", getAllUsers);

export default router;
