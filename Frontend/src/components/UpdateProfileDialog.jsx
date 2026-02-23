// import React, { useState } from 'react'
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
// import { Label } from './ui/label'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import { Loader2 } from 'lucide-react'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const UpdateProfileDialog = ({ open, setOpen }) => {
//     const [loading, setLoading] = useState(false);
//     const { user } = useSelector(store => store.auth);

//     const [input, setInput] = useState({
//         fullname: user?.fullname || "",
//         email: user?.email || "",
//         phoneNumber: user?.phoneNumber || "",
//         bio: user?.profile?.bio || "",
//         skills: user?.profile?.skills?.map(skill => skill) || "",
//         file: user?.profile?.resume || ""
//     });
//     const dispatch = useDispatch();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }

//     const fileChangeHandler = (e) => {
//         const file = e.target.files?.[0];
//         setInput({ ...input, file })
//     }

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("bio", input.bio);
//         formData.append("skills", input.skills);
//         if (input.file) {
//             formData.append("file", input.file);
//         }
//         try {
//             setLoading(true);
//             const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 dispatch(setUser(res.data.user));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally{
//             setLoading(false);
//         }
//         setOpen(false);
//         console.log(input);
//     }



//     return (
//         <div>
//             <Dialog open={open}>
//                 <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
//                     <DialogHeader>
//                         <DialogTitle>Update Profile</DialogTitle>
//                     </DialogHeader>
//                     <form onSubmit={submitHandler}>
//                         <div className='grid gap-4 py-4'>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="name" className="text-right">Name</Label>
//                                 <Input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     value={input.fullname}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="email" className="text-right">Email</Label>
//                                 <Input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     value={input.email}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="number" className="text-right">Number</Label>
//                                 <Input
//                                     id="number"
//                                     name="number"
//                                     value={input.phoneNumber}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="bio" className="text-right">Bio</Label>
//                                 <Input
//                                     id="bio"
//                                     name="bio"
//                                     value={input.bio}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="skills" className="text-right">Skills</Label>
//                                 <Input
//                                     id="skills"
//                                     name="skills"
//                                     value={input.skills}
//                                     onChange={changeEventHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="file" className="text-right">Resume</Label>
//                                 <Input
//                                     id="file"
//                                     name="file"
//                                     type="file"
//                                     accept="application/pdf"
//                                     onChange={fileChangeHandler}
//                                     className="col-span-3"
//                                 />
//                             </div>
//                         </div>
//                         <DialogFooter>
//                             {
//                                 loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
//                             }
//                         </DialogFooter>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }

// export default UpdateProfileDialog
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[500px] bg-gray-900 border border-gray-800 text-gray-200 rounded-2xl"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Update Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler}>
          <div className="grid gap-5 py-6">

            {/* Name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="fullname"
                type="text"
                value={input.fullname}
                onChange={changeEventHandler}
                className="bg-gray-800 border-gray-700 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="bg-gray-800 border-gray-700 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className="bg-gray-800 border-gray-700 focus:ring-indigo-500"
              />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label>Bio</Label>
              <Input
                name="bio"
                value={input.bio}
                onChange={changeEventHandler}
                className="bg-gray-800 border-gray-700 focus:ring-indigo-500"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>Skills</Label>
              <Input
                name="skills"
                value={input.skills}
                onChange={changeEventHandler}
                className="bg-gray-800 border-gray-700 focus:ring-indigo-500"
              />
            </div>

            {/* Resume */}
            <div className="space-y-2">
              <Label>Resume (PDF)</Label>
              <Input
                name="file"
                type="file"
                accept="application/pdf"
                onChange={fileChangeHandler}
                className="bg-gray-800 border-gray-700 file:text-gray-300"
              />
            </div>
          </div>

          <DialogFooter>
            {loading ? (
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Update Profile
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;