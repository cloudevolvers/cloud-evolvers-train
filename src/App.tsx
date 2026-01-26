import { AzureExcellencePage } from "@/pages/AzureExcellencePage";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";

import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BlogPage } from "@/components/BlogPage";
import { AboutPage } from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { CookiePolicyPage } from "@/pages/CookiePolicyPage";
import TrainingDetailPage from "@/pages/training/TrainingDetailPage";
import TrainingOverviewPage from "@/pages/training/TrainingOverviewPage";
import ContactPage from "@/pages/ContactPage";

import PricingDashboard from "@/components/admin/PricingDashboard";
import ImageManagementPage from "@/pages/ImageManagementPage";
import { NotFound } from "@/components/NotFound";
import { SEO, PAGE_SEO } from "@/components/SEO";
import { FloatingContactButton } from "@/components/ui/FloatingContactButton";
import {
  CloudManagementPage,
  AzureMonitoringPage,
  SecurityCompliancePage,
  CostOptimizationPage,
  EnterpriseFileTransferPage,
  Microsoft365CopilotPage,
  CloudEngineeringPage,
  InfrastructureAsCodePage,
  AIEngineeringPage,
  NetworkEngineeringPage
} from "@/pages/services";

import HomePage from "@/pages/HomePage";



function App() {
  // Test comment for PR preview deployment
  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden bg-background">
        {/* Main content */}
        <div className="relative z-20">
          <Header />
          <main className="bg-background min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/azure-excellence" element={<AzureExcellencePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/training" element={<TrainingOverviewPage />} />
              <Route path="/training/:slug" element={<TrainingDetailPage />} />

              {/* Services Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/cloud-management" element={<CloudManagementPage />} />
              <Route path="/services/azure-monitoring" element={<AzureMonitoringPage />} />
              <Route path="/services/security-compliance" element={<SecurityCompliancePage />} />
              <Route path="/services/cost-optimization" element={<CostOptimizationPage />} />
              <Route path="/services/enterprise-file-transfer" element={<EnterpriseFileTransferPage />} />
              <Route path="/services/microsoft-365-copilot" element={<Microsoft365CopilotPage />} />
              <Route path="/services/cloud-engineering" element={<CloudEngineeringPage />} />
              <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCodePage />} />
              <Route path="/services/ai-engineering" element={<AIEngineeringPage />} />
              <Route path="/services/network-engineering" element={<NetworkEngineeringPage />} />

              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/admin" element={<PricingDashboard />} />
              <Route path="/admin/pricing" element={<PricingDashboard />} />
              <Route path="/admin/images" element={<ImageManagementPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* Floating Quick Message Button - sits next to WhatsApp widget */}
          <FloatingContactButton />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;