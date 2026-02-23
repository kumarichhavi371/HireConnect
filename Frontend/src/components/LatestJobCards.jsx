// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards

import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job?._id}`)}
      className="
        p-6 
        rounded-2xl 
        bg-gray-900 
        border 
        border-gray-800 
        cursor-pointer 
        hover:border-indigo-600 
        hover:shadow-lg 
        transition-all 
        duration-300
      "
    >
      {/* Company Info */}
      <div>
        <h1 className="font-semibold text-lg text-gray-100">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-400">India</p>
      </div>

      {/* Job Title & Description */}
      <div>
        <h1 className="font-bold text-xl text-white my-3">
          {job?.title}
        </h1>

        <p className="text-sm text-gray-400 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-5">
        <Badge className="bg-blue-900/40 text-blue-400 border border-blue-800">
          {job?.position} Positions
        </Badge>

        <Badge className="bg-red-900/40 text-red-400 border border-red-800">
          {job?.jobType}
        </Badge>

        <Badge className="bg-purple-900/40 text-purple-400 border border-purple-800">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;