import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 px-4 md:px-8 bg-transparent">
      <div className="absolute -top-10 -left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-[100px] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-block font-sans font-extrabold text-xs tracking-[2.5px] text-emerald-600 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full uppercase mb-5">
              BECOME A PART OF SKILL HUB
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-[64px] text-slate-900 leading-[1.1] tracking-tight mb-6 max-w-2xl">
              Elevate Your Career with <span className="text-emerald-600">Edvanta</span>
            </h1>
            <p className="font-sans font-medium text-xl text-slate-700 leading-relaxed mb-9 max-w-xl">
              Join our online courses designed by <strong className="text-emerald-600 font-bold">top experts from IIT and ISB</strong> to gain the skills you need for your professional journey.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQnNse67qz9SkYDNQFTO2nY4hdeT7J0KqmyripVtCsrzDZ2g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all duration-300"
              >
                <span>Enroll Now</span>
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  <FaArrowRight size={12} />
                </span>
              </a>
              <span className="font-semibold text-sm text-slate-700">
                Enrolled by <strong className="text-black font-extrabold">15,000+ Students</strong>
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[460px] flex items-center justify-center">
            <div className="absolute w-[310px] h-[400px] bg-gradient-to-br from-emerald-600 to-black rounded-[40px] -rotate-[22deg] -skew-x-3 right-10 top-4 shadow-2xl shadow-emerald-900/30" />
            <div className="absolute w-[50px] h-[130px] bg-emerald-500 rounded-[25px] -rotate-[22deg] right-2 top-0 opacity-90" />
            <div className="absolute w-[35px] h-[85px] bg-black rounded-[18px] -rotate-[22deg] left-14 top-8 opacity-85" />
            <div className="relative z-10 h-[430px] rounded-3xl overflow-hidden bg-transparent">
              <img
                src="images/hero_student_girl.jpg"
                alt="Student Learner"
                className="h-full object-contain filter drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-14 -right-4 z-20 bg-white rounded-2xl p-3 px-5 shadow-xl border border-slate-100 flex items-center gap-3 animate-pulse">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-black text-xs flex items-center justify-center">G</div>
              <div>
                <span className="block font-extrabold text-xs text-black leading-none">Google</span>
                <span className="text-[9px] font-bold text-slate-500 tracking-wider">CERTIFICATIONS</span>
              </div>
            </div>
            <div className="absolute bottom-28 -left-6 z-20 bg-white rounded-2xl p-3 px-5 shadow-xl border border-slate-100">
              <span className="block text-[9px] font-extrabold text-slate-500 tracking-wider mb-1.5">ENROLLED & LEARNED BY</span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold border-2 border-white">RK</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] font-bold border-2 border-white">SR</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-300 text-emerald-900 flex items-center justify-center text-[10px] font-bold border-2 border-white">VS</div>
                </div>
                <span className="font-extrabold text-xs text-black">1000+ Students</span>
              </div>
            </div>
            <div className="absolute bottom-4 -right-2 z-20 bg-white rounded-2xl p-3 px-5 shadow-xl border border-slate-100 text-left">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[10px] font-extrabold text-slate-600">REVIEWED 4.4+</span>
                <div className="flex text-amber-400 text-[10px]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-emerald-600">Google</span>
                <span className="text-xs font-bold text-slate-600">990 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;