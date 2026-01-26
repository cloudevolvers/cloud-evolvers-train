import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, DownloadSimple, FilePdf } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center mb-6 text-sm text-green-500 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <h1 className="text-green-400 font-bold mb-8">Terms of Service</h1>
              
              <div className="prose-invert max-w-none">
                <p className="text-muted-foreground mb-2">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Cloud Evolvers is a company of <span className="text-green-400 font-semibold">Spot Cloud B.V.</span>
                </p>
                
                {/* Download Section */}
                <div className="bg-muted/20 p-6 rounded-lg mb-8 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <FilePdf className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-green-400 m-0">Download Terms of Service</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download the complete Terms of Service document in your preferred language:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500/50 hover:bg-green-500/10 hover:border-green-500"
                    >
                      <a 
                        href="/Algemene voorwaardenSpotCloud.pdf" 
                        download="SpotCloud-Terms-of-Service-NL.pdf"
                        className="inline-flex items-center gap-2"
                      >
                        <DownloadSimple className="h-4 w-4" />
                        Nederlands (Dutch)
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500/50 hover:bg-green-500/10 hover:border-green-500"
                    >
                      <a 
                        href="/documents/terms-of-service-en.html" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <DownloadSimple className="h-4 w-4" />
                        English
                      </a>
                    </Button>
                  </div>
                </div>
                
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Cloud Evolvers services (operated by Spot Cloud B.V.), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
                </p>
                
                <h2>2. Description of Services</h2>
                <p>
                  Spot Cloud B.V., operating under the Cloud Evolvers brand, provides Azure training, Microsoft 365 training, and cloud consulting services. Our services include but are not limited to Microsoft Certified Training (MCT), end-to-end implementations, automation solutions, and strategic consulting.
                </p>
                
                <h2>3. User Obligations</h2>
                <p>
                  You agree to provide accurate, current, and complete information as required for using our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                
                <h2>4. Intellectual Property Rights</h2>
                <p>
                  All content, features, and functionality within the Cloud Evolvers services, including but not limited to text, graphics, logos, and course materials are the exclusive property of Spot Cloud B.V. or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                
                <h2>5. Data Protection and GDPR Compliance</h2>
                <p>
                  We are committed to protecting your personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR). For details on how we collect, use, and protect your data, please refer to our <Link to="/privacy-policy" className="text-green-500 hover:underline">Privacy Policy</Link>.
                </p>
                
                <h2>6. Right to Access and Data Portability</h2>
                <p>
                  In accordance with GDPR, you have the right to access, correct, or delete your personal data that we process. You may also request to receive your personal data in a structured, commonly used, machine-readable format.
                </p>
                
                <h2>7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Spot Cloud B.V. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, resulting from your use of our services.
                </p>
                
                <h2>8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will provide notice of any material changes through our website or by other means. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
                
                <h2>9. Governing Law</h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law principles.
                </p>
                
                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@cloudevolvers.com" className="text-green-500 hover:underline">legal@cloudevolvers.com</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
