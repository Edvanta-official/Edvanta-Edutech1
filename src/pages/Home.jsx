import React from 'react';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Statistics from '../components/home/Statistics';
import Courses from '../components/home/Courses';
import Internship from '../components/home/Internship';
import Placements from '../components/home/Placements';
import Webinar from '../components/home/Webinar';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <div className="bg-bgDark min-h-screen">
      <Hero />
      <Partners />
      <Statistics />
      <Courses />
      <Internship />
      <Placements />
      <Webinar />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
