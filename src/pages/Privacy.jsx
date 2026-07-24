import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-28 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-gray-200">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Data Privacy & Security
        </span>
        <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg">
          Learn how Edvanta collects, uses, and protects your personal data.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-2xl space-y-10 border border-white/10">
        
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            🔒 Introduction & Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This Privacy Policy forms part of Edvanta’s Terms and Conditions for accessing our Website and Learning Management Portal. By using our Website or LMS, you expressly agree to our collection and use of your personal data as outlined in this Privacy Policy. If we request information that can identify you, you can be assured it will be used strictly in accordance with this statement. You should review this page periodically to ensure you are aware of any updates.
          </p>
          <div className="p-4 bg-primary/40 border-l-4 border-accent rounded-r-lg text-sm font-medium text-gray-200">
            By accessing our site and services, you agree to the terms of this Privacy & Data Policy and expressly consent to the processing of your personal information as described herein.
          </div>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            📋 Information We Collect
          </h2>
          <p className="text-gray-300">
            To provide our online courses, weekend live sessions, certificates, internship programs, and project opportunities, we collect the minimum information required to create and manage your account. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Your name</li>
            <li>Email address</li>
            <li>Password</li>
            <li>Age (to verify you are 16 or older)</li>
            <li>Phone number (only when necessary for communication)</li>
            <li>Academic or professional details (if required for internships/projects)</li>
          </ul>
          <p className="text-gray-400 text-sm">
            We do not store any payment-related information. All payments are securely processed via Razorpay.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            🍪 Use of Cookies, Tags & Device Identifiers
          </h2>
          <p className="text-gray-300">
            Cookies are small data files stored in your browser. Device identifiers uniquely identify devices such as mobile phones. We may use cookies, web beacons/pixels, and device identifiers.
          </p>
        </section>

        {/* Use of Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            ⚙️ Use of Personal Information
          </h2>
          <p className="text-gray-300">We primarily use your information to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Provide course access and LMS services</li>
            <li>Issue certificates for course completion, internships, and projects</li>
            <li>Respond to support queries</li>
            <li>Improve platform functionality</li>
            <li>Detect and resolve issues</li>
            <li>Ensure compliance with terms of use</li>
            <li>Communicate updates, opportunities, and service announcements</li>
          </ul>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            🔐 Security & Retention
          </h2>
          <p className="text-gray-300">
            We take reasonable security measures to protect your personal information. Data is stored securely on compliant servers within India or approved cloud environments. We retain data as long as your account remains active or as required for certification and service-related purposes.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4 pt-4 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            📞 Contact Us
          </h2>
          <div className="p-6 bg-primary/40 rounded-xl space-y-2 text-gray-200">
            <p><strong className="text-white">Email:</strong> admin@edvanta-edu.com</p>
            <p><strong className="text-white">Phone:</strong> +91 7075854314</p>
            <p><strong className="text-white">Address:</strong> Edvanta Edutech, India</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Privacy;
