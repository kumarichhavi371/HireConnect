// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import HeroSection from './HeroSection'
// import CategoryCarousel from './CategoryCarousel'
// import LatestJobs from './LatestJobs'
// import Footer from './shared/Footer'
// import useGetAllJobs from '@/hooks/useGetAllJobs'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate("/admin/companies");
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <CategoryCarousel />
//       <LatestJobs />
//       <Footer />
//     </div>
//   )
// }

// export default Home
import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20">
        <HeroSection />
      </section>

      {/* Categories */}
      <section className="py-16">
        <CategoryCarousel />
      </section>

      {/* Latest Jobs */}
      <section className="pb-20">
        <LatestJobs />
      </section>

      <Footer />
    </div>
  );
};

export default Home;