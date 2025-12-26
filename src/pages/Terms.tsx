import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Badge variant="gradient" className="mb-4">Legal</Badge>
            <h1 className="font-display text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 26, 2025</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using ProHire's services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  ProHire provides an online platform that connects job seekers with employers. 
                  We offer tools for job posting, candidate search, application tracking, and 
                  recruitment management.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">To use certain features, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">4. User Conduct</h2>
                <p className="text-muted-foreground mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Post false or misleading information</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use the platform for illegal activities</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Scrape or collect user data without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground">
                  For paid services, you agree to pay all fees as described at the time of purchase. 
                  Subscriptions will automatically renew unless cancelled. Refunds are provided in 
                  accordance with our refund policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content and materials on ProHire are owned by us or our licensors. 
                  You retain ownership of content you submit but grant us a license to use 
                  it in connection with our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  ProHire is provided "as is" without warranties. We are not liable for any indirect, 
                  incidental, or consequential damages arising from your use of the platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account at any time for violations of these terms. 
                  You may also delete your account at any time through your account settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl font-semibold mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at legal@prohire.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
