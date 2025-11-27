import Review from "../models/Review.js";

export const likeReviews = async (req, res) => {
  try {
    const { reviewId } = req.body;

    if (!reviewId) {
      return res.status(400).json({
        success: false,
        error: "reviewId is required",
      });
    }

    const updated = await Review.findByIdAndUpdate(
      reviewId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: "Review not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Like added",
      data: updated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Failed to like review",
    });
  }
};
