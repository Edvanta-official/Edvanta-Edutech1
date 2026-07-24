import React from 'react';

const Terms = () => {
  return (
    <div className="pt-28 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-gray-200">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Legal & Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-white mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-lg">
          Please read these Terms & Conditions carefully before using Edvanta’s platform and services.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-2xl space-y-10 border border-white/10">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">01</span>
            1. INTRODUCTION
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Edvanta (“we”, “our”, “us”). These Terms & Conditions (“Terms”) govern your use of the Edvanta Website, Learning Management Portal, online courses, weekend live sessions, certification programs, internship programs, and all other educational services provided by Edvanta (“Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you may not access or use our Services.
          </p>
          <div className="p-4 bg-primary/40 border-l-4 border-accent rounded-r-lg text-sm font-medium text-gray-200">
            These Terms form a legally binding agreement between you (the Student/User) and Edvanta, India. Please read them carefully.
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">02</span>
            2. DEFINITIONS
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">“Account”</strong> – Your registered profile on Edvanta’s platform.</li>
            <li><strong className="text-white">“Course”</strong> – Any online course, recorded program, or live training published by Edvanta.</li>
            <li><strong className="text-white">“Course Fees”</strong> – Payment required to enroll in a Course or Program.</li>
            <li><strong className="text-white">“Content”</strong> – Videos, PDFs, images, quizzes, software, training modules, and other educational material.</li>
            <li><strong className="text-white">“Student/User”</strong> – Any individual who registers and uses Edvanta Services.</li>
            <li><strong className="text-white">“Instructor”</strong> – Trainers or professionals delivering course content.</li>
            <li><strong className="text-white">“Platform”</strong> – Edvanta Website and Learning Management System.</li>
            <li><strong className="text-white">“Payment Method”</strong> – Razorpay or other approved methods.</li>
            <li><strong className="text-white">“Workshop”</strong> – Short-duration instructor-led sessions.</li>
            <li><strong className="text-white">“Arbitration”</strong> – Private legal resolution as per Indian laws.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">03</span>
            3. ACCOUNT CREATION & RESPONSIBILITIES
          </h2>
          <p className="text-gray-300">To use Edvanta Services, you must create an account with accurate, complete, and up-to-date information. You are responsible for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Maintaining confidentiality of your login details</li>
            <li>All activities under your account</li>
            <li>Immediately notifying Edvanta of unauthorized access</li>
          </ul>
          <p className="text-gray-400 text-sm">Edvanta is not responsible for loss caused by compromised accounts due to user negligence.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">04</span>
            4. ELIGIBILITY
          </h2>
          <p className="text-gray-300">You must be at least 16 years old to use Edvanta Services. By registering, you confirm that:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>You meet the required age</li>
            <li>You are legally capable of entering into an agreement</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">05</span>
            5. ACCESS RIGHTS & PERMITTED USAGE
          </h2>
          <p className="text-gray-300">When you enroll in a Course, Edvanta grants you a limited, non-exclusive, non-transferable license to access the educational content solely for personal learning.</p>
          <p className="text-white font-semibold">You are NOT allowed to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Share your login credentials</li>
            <li>Download, copy, distribute, or record course content</li>
            <li>Upload Edvanta content to other platforms</li>
            <li>Share live class recordings</li>
            <li>Resell or commercially exploit any material</li>
          </ul>
          <p className="text-red-400 text-sm">Violation may result in account suspension or legal action.</p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">06</span>
            6. PAYMENTS, FEES & REFUNDS
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All payments are processed securely via Razorpay.</li>
            <li>Edvanta does NOT store your banking or card details.</li>
            <li>All Course Fees are <strong className="text-white">non-refundable and non-transferable</strong>.</li>
            <li>Once payment is completed, no refund will be issued under any circumstances.</li>
            <li>GST/taxes may apply based on Indian regulations.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">07</span>
            7. COURSE CHANGES
          </h2>
          <p className="text-gray-300">A one-time course change is allowed ONLY if:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Requested before batch commencement</li>
            <li>Seats are available in the alternative course</li>
          </ul>
          <p className="text-gray-400 text-sm">Once a batch begins, course changes are not permitted.</p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">08</span>
            8. CERTIFICATES & INTERNSHIPS
          </h2>
          <p className="text-gray-300">Edvanta provides Course Completion Certificates, Internship Certificates, and Project Certificates.</p>
          <p className="text-white font-semibold">Issuance conditions:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Successful completion of assessments</li>
            <li>Full payment of fees</li>
            <li>Compliance with course requirements</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">09</span>
            9. INFORMATION SECURITY & PRIVACY
          </h2>
          <p className="text-gray-300">Edvanta protects your personal data using reasonable security controls ensuring confidentiality, integrity, and availability.</p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">10</span>
            10. USER CODE OF CONDUCT
          </h2>
          <p className="text-white font-semibold">While using Edvanta, You MUST NOT:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Harass, abuse, disrespect, or insult instructors or students</li>
            <li>Use offensive, misleading, or harmful language</li>
            <li>Upload copyrighted, illegal, or inappropriate content</li>
            <li>Disrupt live sessions or misuse chat features</li>
            <li>Engage in cheating or misuse of assessments</li>
          </ul>
        </section>

        {/* Section 11 - 19 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">11</span>
            11. INTELLECTUAL PROPERTY RIGHTS
          </h2>
          <p className="text-gray-300">All content on Edvanta is protected by copyright and IP laws. Edvanta owns exclusive rights to its courses, graphics, recordings, and materials.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">12</span>
            12. PLATFORM AVAILABILITY & SERVICE MODIFICATION
          </h2>
          <p className="text-gray-300">Edvanta may modify, suspend, or discontinue services for system upgrades, maintenance, or technical issues.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">13</span>
            13. THIRD-PARTY CONTENT & LINKS
          </h2>
          <p className="text-gray-300">Our platform may include third-party links. Edvanta is not responsible for external content or sites.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">14</span>
            14. LIMITATION OF LIABILITY
          </h2>
          <p className="text-gray-300">To the maximum extent permitted by law, Edvanta shall not be liable for indirect, incidental, or consequential damages.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">15</span>
            15. INDEMNIFICATION
          </h2>
          <p className="text-gray-300">You agree to indemnify and hold Edvanta harmless against claims arising from violation of these Terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">16</span>
            16. DISPUTE RESOLUTION – ARBITRATION
          </h2>
          <p className="text-gray-300">Disputes shall be resolved through Arbitration governed by The Arbitration & Conciliation Act, 1996 in Hyderabad, Telangana.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">17</span>
            17. TERMINATION OF ACCOUNT
          </h2>
          <p className="text-gray-300">Edvanta may terminate your account if you violate Terms or engage in misconduct.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">18</span>
            18. GOVERNING LAW
          </h2>
          <p className="text-gray-300">These Terms are governed by the laws of India, specifically applicable in Telangana.</p>
        </section>

        <section className="space-y-4 pt-4 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-accent text-bgDark text-sm px-3 py-1 rounded-full font-black">19</span>
            19. CONTACT INFORMATION
          </h2>
          <div className="p-6 bg-primary/40 rounded-xl space-y-2 text-gray-200">
            <p><strong className="text-white">Email:</strong> admin@edvanta-edu.com</p>
            <p><strong className="text-white">Phone:</strong> +91 7075854314</p>
            <p><strong className="text-white">Address:</strong> Edvanta Edutech Private Limited, India</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Terms;
