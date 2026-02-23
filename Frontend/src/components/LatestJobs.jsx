// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs
import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs = [] } = useSelector((store) => store.job || {});

  return (
    <div className="bg-gray-950 text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-indigo-500">Latest & Top</span> Job Openings
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Discover the most recent and trending job opportunities.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.length <= 0 ? (
            <div className="col-span-full text-center text-gray-400 py-16">
              No Job Available
            </div>
          ) : (
            allJobs
              ?.slice(0, 6)
              .map((job) => (
                <LatestJobCards key={job._id} job={job} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;