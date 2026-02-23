import { Job } from "../models/job.model.js";

// ✅ ADMIN — post job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId
    } = req.body;

    const userId = req.id;

    // ✅ validation
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false
      });
    }

    // ✅ create job (FIXED)
    const job = await Job.create({
      title,
      description,
      requirements, // 🔥 FIX: removed split
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position: Number(position),
      company: companyId,
      created_by: userId
    });

    return res.status(201).json({
      message: "New job created successfully.",
      job,
      success: true
    });

  } catch (error) {
    console.error("postJob error:", error);
    return res.status(500).json({
      message: "Server error while creating job.",
      success: false
    });
  }
};

// ✅ STUDENT — get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
      ]
    };

    const jobs = await Job.find(query)
      .populate("company")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      jobs,
      success: true
    });

  } catch (error) {
    console.error("getAllJobs error:", error);
    return res.status(500).json({
      message: "Server error while fetching jobs.",
      success: false
    });
  }
};

// ✅ STUDENT — get job by id
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate("applications");

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false
      });
    }

    return res.status(200).json({
      job,
      success: true
    });

  } catch (error) {
    console.error("getJobById error:", error);
    return res.status(500).json({
      message: "Server error while fetching job.",
      success: false
    });
  }
};

// ✅ ADMIN — get admin jobs
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ created_by: adminId })
      .populate("company")
      .sort({ createdAt: -1 }); // 🔥 FIXED

    return res.status(200).json({
      jobs,
      success: true
    });

  } catch (error) {
    console.error("getAdminJobs error:", error);
    return res.status(500).json({
      message: "Server error while fetching admin jobs.",
      success: false
    });
  }
};
