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
  getAllReviews,
  getReviewsByCompany,
  deleteReview
} from "../controllers/reviewsController.js";

import { likeReviews } from "../controllers/likesController.js";

const router = express.Router();

// SIGNUP
router.post("/admin/create", createAdmin);
router.post("/alumni/create", createAlumni);
router.post("/student/create", createStudent);

// LOGIN
router.post("/login", loginUser);

// COMPANIES (तू नंतर implement करू शकतोस)
router.post("/company/create", createCompany);
router.get("/company/get", getCompanies);

// REVIEWS
router.post("/review/create", createReview);
router.get("/reviews/all", getAllReviews);
router.get("/reviews/company/:company", getReviewsByCompany);
router.delete("/review/:id", deleteReview);

// LIKES
router.post("/like/add", likeReviews);

// USERS
router.get("/user/get", getAllUsers);

export default router;
