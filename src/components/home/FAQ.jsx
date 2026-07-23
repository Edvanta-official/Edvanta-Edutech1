import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQS } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <SectionTitle title="Frequently Asked Questions" subtitle="HAVE QUESTIONS?" />

      <div className="flex flex-col gap-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="glass rounded-xl overflow-hidden transition-all duration-300 border border-white/5">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-primary/20 transition-colors"
              >
                <span className="font-manrope font-semibold text-white text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="text-secondary">
                  {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
