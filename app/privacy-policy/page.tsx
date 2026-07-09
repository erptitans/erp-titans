import { Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ERP Titans",
  description: "Privacy Policy explaining how ERP Titans collects, uses, discloses, and safeguards your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6">
      <div className="w-full max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 lg:p-14">
        {/* Header */}
        <div className="flex items-center gap-6 mb-12 pb-10 border-b border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-[#003D82]/5 flex items-center justify-center shrink-0">
            <Shield className="text-[#003D82]" size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl md:text-[36px] font-extrabold text-[#0F172A] mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[#475569] text-sm">
              Last Updated: April 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">1. Introduction</h2>
            <p className="text-[#475569] leading-relaxed">
              At ERP Titans, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We are committed to protecting your personal data and your right to privacy in accordance with Canadian and international data protection standards.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">2. Information We Collect</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Fill out our contact or inquiry forms</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Schedule an ERP Health Audit or consultation</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Communicate with us via email or phone</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Request resources or whitepapers</span>
              </li>
            </ul>
            <p className="text-[#475569] leading-relaxed">
              This information may include your name, email address, phone number, company name, industry, and details regarding your current ERP system challenges.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Provide, operate, and maintain our services</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Process your inquiries and schedule consultations</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Send you meeting invites and follow-up communications</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Analyze and improve our website and service offerings</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D82] mt-2.5 mr-3 shrink-0"></span>
                <span className="text-[#475569] leading-relaxed">Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">4. Data Security</h2>
            <p className="text-[#475569] leading-relaxed">
              We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">5. Third-Party Services</h2>
            <p className="text-[#475569] leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except for trusted third parties who assist us in operating our website and conducting our business (such as Microsoft 365 for email and calendar services), so long as those parties agree to keep this information confidential.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">6. Contact Us</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              If you have questions or comments about this policy, you may email us at:
            </p>
            <a href="mailto:sales@erptitans.com" className="text-[#003D82] font-bold hover:underline">
              sales@erptitans.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
