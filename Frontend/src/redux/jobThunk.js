import axios from "axios";
import { setAllAppliedJobs } from "./jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

export const getAppliedJobs = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${APPLICATION_API_END_POINT}/get`,
      { withCredentials: true }
    );
console.log("Thunk response:", res.data);
    if (res.data.success) {
      dispatch(setAllAppliedJobs(res.data.application)); // ⭐ important
    }
  } catch (error) {
    console.log(error);
  }
};