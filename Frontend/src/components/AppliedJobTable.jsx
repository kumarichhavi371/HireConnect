// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import { Badge } from "./ui/badge";
// import { useSelector } from "react-redux";

// const AppliedJobTable = () => {
//   const { allAppliedJobs } = useSelector((store) => store.job);

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your applied jobs</TableCaption>

//         <TableHeader>
//           <TableRow>
//             <TableHead>Date</TableHead>
//             <TableHead>Job Role</TableHead>
//             <TableHead>Company</TableHead>
//             <TableHead className="text-right">Status</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {allAppliedJobs?.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center text-gray-500">
//                 You haven't applied any job yet.
//               </TableCell>
//             </TableRow>
//           ) : (
//             allAppliedJobs.map((appliedJob) => (
//               <TableRow key={appliedJob._id}>
//                 <TableCell>
//                   {appliedJob?.createdAt?.split("T")[0]}
//                 </TableCell>

//                 <TableCell>
//                   {appliedJob?.job?.title || "N/A"}
//                 </TableCell>

//                 <TableCell>
//                   {appliedJob?.job?.company?.name || "N/A"}
//                 </TableCell>

//                 <TableCell className="text-right">
//                   <Badge
//                     className={
//                       appliedJob?.status === "rejected"
//                         ? "bg-red-500"
//                         : appliedJob?.status === "pending"
//                         ? "bg-gray-500"
//                         : "bg-green-500"
//                     }
//                   >
//                     {appliedJob?.status?.toUpperCase()}
//                   </Badge>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AppliedJobTable;
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs = [] } = useSelector((store) => store.job || {});

  const getStatusStyle = (status) => {
    switch (status) {
      case "rejected":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "accepted":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  return (
    <div className="mt-6">
      <Table>
        <TableCaption className="text-gray-400">
          A list of your applied jobs
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-8 text-gray-500"
              >
                🚀 You haven't applied to any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob?._id}>
                {/* Date */}
                <TableCell>
                  {appliedJob?.createdAt
                    ? appliedJob.createdAt.split("T")[0]
                    : "N/A"}
                </TableCell>

                {/* Job Title */}
                <TableCell className="font-medium text-white">
                  {appliedJob?.job?.title || "N/A"}
                </TableCell>

                {/* Company */}
                <TableCell className="text-gray-400">
                  {appliedJob?.job?.company?.name || "N/A"}
                </TableCell>

                {/* Status */}
                <TableCell className="text-right">
                  <Badge
                    className={`${getStatusStyle(
                      appliedJob?.status
                    )} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {appliedJob?.status
                      ? appliedJob.status.toUpperCase()
                      : "UNKNOWN"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;