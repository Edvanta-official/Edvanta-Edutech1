import React from 'react';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Courses from '../components/home/Courses';
import Internship from '../components/home/Internship';
import Placements from '../components/home/Placements';
import Testimonials from '../components/home/Testimonials';
import Webinar from '../components/home/Webinar';
import Statistics from '../components/home/Statistics';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative light meshes in background */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '-15%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Hero />
      <Partners />
      <Statistics />
      <Courses />
      <Internship />
      <Webinar />
      <Placements />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
