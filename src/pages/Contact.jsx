import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent. Our team will get back to you shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Get in Touch" subtitle="CONTACT EDVANTA" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Contact info grid */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="bg-primary/25 border-white/5 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <FaPhoneAlt size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs block font-semibold">CALL US</span>
              <span className="text-white text-sm font-semibold">+91 98765 43210</span>
            </div>
          </Card>

          <Card className="bg-primary/25 border-white/5 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <FaEnvelope size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs block font-semibold">EMAIL US</span>
              <span className="text-white text-sm font-semibold">support@edvanta.com</span>
            </div>
          </Card>

          <Card className="bg-primary/25 border-white/5 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <FaMapMarkerAlt size={16} />
            </div>
            <div>
              <span className="text-gray-500 text-xs block font-semibold">LOCATION</span>
              <span className="text-white text-xs font-semibold leading-relaxed">
                Bangalore Innovation Hub, Karnataka, India
              </span>
            </div>
          </Card>
        </div>

        {/* Lead Query Form */}
        <div className="lg:col-span-2">
          <Card className="bg-primary/30 border-white/5 p-8">
            <h3 className="text-xl font-manrope font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold block mb-1">PHONE NUMBER</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold block mb-1">YOUR QUERY</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent resize-none"
                ></textarea>
              </div>
              <Button type="submit" variant="accent" className="py-3 mt-4">
                Submit Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
