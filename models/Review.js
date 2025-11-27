import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    message: {
      type: String,
      trim: true
    },
    userName: {
      type: String,
      trim: true,
      default: "Anonymous"
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
