// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>India's Smart Job Portal</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Discover thousands of verified job opportunities, 
// apply seamlessly, and take the next step toward your dream career!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6'>
            <div className='max-w-4xl mx-auto text-center flex flex-col gap-6'>

                {/* Tagline */}
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-800 text-violet-400 text-sm font-medium border border-gray-700'>
                    India's Smart Job Portal
                </span>

                {/* Heading */}
                <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
                    Search, Apply & <br />
                    Get Your <span className='text-violet-500'>Dream Job</span>
                </h1>

                {/* Description */}
                <p className='text-gray-300 text-lg'>
                    Discover thousands of verified job opportunities,
                    apply seamlessly, and take the next step toward your dream career.
                </p>

                {/* Search Bar */}
                <div className='flex w-full md:w-[70%] mx-auto bg-gray-800 border border-gray-700 rounded-full shadow-lg overflow-hidden'>

                    <input
                        type="text"
                        placeholder='Find your dream job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-full px-5 py-3 bg-transparent text-white placeholder-gray-400 outline-none'
                    />

                    <Button
                        onClick={searchJobHandler}
                        className="bg-violet-600 hover:bg-violet-700 px-6 rounded-none"
                    >
                        <Search className='h-5 w-5' />
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default HeroSection