import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    // ✅ FIXED (lowercase)
    description: {
      type: String,
      required: true
    },

    requirements: {
      type: String
    },

    salary: {
      type: Number,
      required: true
    },

    // ✅ FIXED typo
    location: {
      type: String,
      required: true
    },

    jobType: {
      type: String,
      required: true
    },

    // ✅ FIXED type
    position: {
      type: Number,
      required: true
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // ✅ FIXED to array
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application"
      }
    ]
  },
  {
    timestamps: true // ⭐ VERY IMPORTANT
  }
);

export const Job = mongoose.model("Jobs", jobSchema);
export default Job;
