import Review from "../models/Review.js";

// create review
export const createReview = async (req, res) => {
  try {
    const { company, rating, message, userName } = req.body;

    if (!company || !rating) {
      return res.status(400).json({
        success: false,
        error: "Company and rating are required",
      });
    }

    const review = new Review({
      company,
      rating,
      message,
      userName: userName || "Anonymous",
    });

    const saved = await review.save();

    return res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: saved,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Failed to create review",
    });
  }
};

// get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch reviews",
    });
  }
};

// optional: get reviews for a single company
export const getReviewsByCompany = async (req, res) => {
  try {
    const { company } = req.params;
    const reviews = await Review.find({ company }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch company reviews",
    });
  }
};

// delete review by id (optional – admin use)
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Review deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Failed to delete review",
    });
  }
};
