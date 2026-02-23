import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  APPLICATION_API_END_POINT,
  JOB_API_END_POINT,
} from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

// ⭐ IMPORTANT — apna thunk path check karo
import { getAppliedJobs } from "@/redux/jobThunk";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const isInitiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  // ✅ APPLY HANDLER
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);

        // realtime UI update
        const updatedSingleJob = {
          ...singleJob,
          applications: [
            ...(singleJob?.applications || []),
            { applicant: user?._id },
          ],
        };

        dispatch(setSingleJob(updatedSingleJob));

        // ⭐⭐⭐ MOST IMPORTANT FIX
        dispatch(getAppliedJobs());

        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Apply failed");
    }
  };

  // ✅ FETCH SINGLE JOB
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/get/${jobId}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));

          setIsApplied(
            res.data.job.applications?.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>

          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position} Positions
            </Badge>

            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>

            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>

        <Button
          onClick={!isApplied ? applyJobHandler : undefined}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 mt-6">
        Job Description
      </h1>

      <div className="my-4 space-y-2">
        <h1 className="font-bold">
          Role:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.title}
          </span>
        </h1>

        <h1 className="font-bold">
          Location:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.location}
          </span>
        </h1>

        <h1 className="font-bold">
          Description:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.description}
          </span>
        </h1>

        <h1 className="font-bold">
          Experience:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.experience} yrs
          </span>
        </h1>

        <h1 className="font-bold">
          Salary:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.salary} LPA
          </span>
        </h1>

        <h1 className="font-bold">
          Total Applicants:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.applications?.length || 0}
          </span>
        </h1>

        <h1 className="font-bold">
          Posted Date:
          <span className="pl-4 font-normal text-white-800">
            {singleJob?.createdAt?.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
