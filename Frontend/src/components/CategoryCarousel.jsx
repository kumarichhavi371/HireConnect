// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// // export default CategoryCarousel
// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Data Science",
//   "Graphic Designer",
//   "FullStack Developer"
// ];

// const CategoryCarousel = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = (query) => {
//     dispatch(setSearchedQuery(query));
//     navigate("/browse");
//   };

//   return (
//     <div>
//       <Carousel className="w-full max-w-xl mx-auto my-20">
//         <CarouselContent>
//           {category.map((cat, index) => (
//             <CarouselItem
//               key={cat}   // ✅ ⭐ IMPORTANT FIX
//               className="md:basis-1/2 lg:basis-1/3" // ✅ also fixed typo
//             >
//               <Button
//                 onClick={() => searchJobHandler(cat)}
//                 variant="outline"
//                 className="rounded-full"
//               >
//                 {cat}
//               </Button>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };

// export default CategoryCarousel;
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gray-950 py-16">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {category.map((cat) => (
            <CarouselItem
              key={cat}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="flex justify-center">
                <Button
                  onClick={() => searchJobHandler(cat)}
                  variant="outline"
                  className="
                    rounded-full
                    border-gray-700
                    bg-gray-900
                    text-gray-300
                    hover:bg-indigo-600
                    hover:text-white
                    hover:border-indigo-600
                    transition-all
                    duration-300
                    px-6
                  "
                >
                  {cat}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Styled Arrows */}
        <CarouselPrevious className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white" />
        <CarouselNext className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;