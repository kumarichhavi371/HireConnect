// import React, { useState } from 'react'
// import Navbar from './shared/Navbar'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Button } from './ui/button'
// import { Contact, Mail, Pen } from 'lucide-react'
// import { Badge } from './ui/badge'
// import { Label } from './ui/label'
// import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import { useSelector } from 'react-redux'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// // const skills = ["Html", "Css", "Javascript", "Reactjs"]
// const isResume = true;

// const Profile = () => {
//     useGetAppliedJobs();
//     const [open, setOpen] = useState(false);
//     const {user} = useSelector(store=>store.auth);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
//                 <div className='flex justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24">
//                             <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-medium text-xl'>{user?.fullname}</h1>
//                             <p>{user?.profile?.bio}</p>
//                         </div>
//                     </div>
//                     <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
//                 </div>
//                 <div className='my-5'>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Mail />
//                         <span>{user?.email}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Contact />
//                         <span>{user?.phoneNumber}</span>
//                     </div>
//                 </div>
//                 <div className='my-5'>
//                     <h1>Skills</h1>
//                     <div className='flex items-center gap-1'>
//                         {
//                             user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5'>
//                     <Label className="text-md font-bold">Resume</Label>
//                     {
//                         isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
//                 <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
//                 {/* Applied Job Table   */}
//                 <AppliedJobTable />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen}/>
//         </div>
//     )
// }

// export default Profile

import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl my-10 p-8 shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 border border-gray-700">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>

            <div>
              <h1 className="font-semibold text-2xl text-white">
                {user?.fullname}
              </h1>
              <p className="text-gray-400 mt-1">
                {user?.profile?.bio || "No bio added"}
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white"
          >
            <Pen size={16} />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-8 space-y-3 text-gray-300">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gray-400" />
            <span>{user?.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Contact size={18} className="text-gray-400" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-6">
          <h1 className="font-semibold text-lg mb-3 text-white">Skills</h1>

          <div className="flex flex-wrap items-center gap-2">
            {user?.profile?.skills?.length !== 0 ? (
              user?.profile?.skills?.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-indigo-900/40 text-indigo-400 border border-indigo-800"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-6">
          <Label className="text-md font-semibold text-white">
            Resume
          </Label>

          <div className="mt-2">
            {isResume ? (
              <a
                target="blank"
                href={user?.profile?.resume}
                className="text-indigo-400 hover:underline"
              >
                {user?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg mb-16">
        <h1 className="font-bold text-xl text-white mb-6">
          Applied Jobs
        </h1>

        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;