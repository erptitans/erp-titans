import { FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ERP Titans",
  description: "Terms of Service for ERP Titans website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[900px] max-w-full mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 lg:p-14">
        {/* Header */}
        <div className="flex items-center gap-6 mb-12 pb-10 border-b border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-[#003D82]/5] flex items-center justify-center shrink-0">
            <FileText className="text-[#003D82]" size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl md:text-[36px] font-bold text-[#003D82] mb-2 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-[#5A6B85] text-sm">
              Last Updated: April 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">1. Agreement to Terms</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              By accessing or using the ERP Titans website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">2. Services Offered</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              ERP Titans provides specialized ERP recovery, optimization, and consultation services. The ERP Health Audit and initial consultations are provided as a means of diagnosing system issues and creating recovery roadmaps.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">3. Intellectual Property</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              The content, features, and functionality of this website, including but not limited to all information, software, text, displays, images, video, and audio, are owned by ERP Titans and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">4. User Conduct</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              You agree not to use the website or services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website or services in any way that could damage the website, services, or general business of ERP Titans.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              Your use of our services and any content obtained through our website is at your own risk. Our services and content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind, either express or implied.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">6. Limitation of Liability</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              In no event will ERP Titans, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use of or inability to use our website or services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">7. Governing Law</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">8. Changes to Terms</h2>
            <p className="text-[#5A6B85] leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the website or services after such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-[#003D82] mb-4">9. Contact Information</h2>
            <p className="text-[#5A6B85] leading-relaxed mb-4">
              For any questions about these terms, please contact us at:
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
