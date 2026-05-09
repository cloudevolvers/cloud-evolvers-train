import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";

import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BlogPage } from "@/components/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import { AboutPage } from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { CookiePolicyPage } from "@/pages/CookiePolicyPage";
import TrainingDetailPage from "@/pages/training/TrainingDetailPage";
import TrainingOverviewPage from "@/pages/training/TrainingOverviewPage";
import ContactPage from "@/pages/ContactPage";

import BookingDashboard from '@/components/admin/BookingDashboard';
import ImageManagementPage from "@/pages/ImageManagementPage";
import { NotFound } from "@/components/NotFound";
import {
  CloudManagementPage,
  AzureMonitoringPage,
  SecurityCompliancePage,
  CostOptimizationPage,
  Microsoft365CopilotPage,
  CloudEngineeringPage,
  InfrastructureAsCodePage,
  AIEngineeringPage,
  NetworkEngineeringPage
} from "@/pages/services";

import HomePage from "@/pages/HomePage";
import PracticeIndexPage from "@/pages/practice/PracticeIndexPage";
import PracticeExamPage from "@/pages/practice/PracticeExamPage";
import ToolsIndexPage from "@/pages/tools/ToolsIndexPage";
import Az104ReadinessQuizPage from "@/pages/tools/Az104ReadinessQuizPage";
import MicrosoftExamCostCalculatorPage from "@/pages/tools/MicrosoftExamCostCalculatorPage";
import MicrosoftCertPathPlannerPage from "@/pages/tools/MicrosoftCertPathPlannerPage";
import AzureRbacRoleChooserPage from "@/pages/tools/AzureRbacRoleChooserPage";
import { trackPortfolioEvent } from "@/lib/portfolio-analytics";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative bg-[color:var(--ed-bg)]">
        <div className="relative z-20">
          <ScrollToTop />
          <PortfolioRouteTracker />
          <Header />
          <main className="bg-background min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/training" element={<TrainingOverviewPage />} />
              <Route path="/training/:slug" element={<TrainingDetailPage />} />

              <Route path="/practice/:lang" element={<PracticeIndexPage />} />
              <Route path="/practice/:lang/:exam" element={<PracticeExamPage />} />

              <Route path="/tools" element={<ToolsIndexPage />} />
              <Route path="/tools/az-104-readiness-quiz" element={<Az104ReadinessQuizPage />} />
              <Route path="/tools/microsoft-exam-cost-calculator" element={<MicrosoftExamCostCalculatorPage />} />
              <Route path="/tools/microsoft-cert-path-planner" element={<MicrosoftCertPathPlannerPage />} />
              <Route path="/tools/azure-rbac-role-chooser" element={<AzureRbacRoleChooserPage />} />

              {/* Services Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/cloud-management" element={<CloudManagementPage />} />
              <Route path="/services/azure-monitoring" element={<AzureMonitoringPage />} />
              <Route path="/services/security-compliance" element={<SecurityCompliancePage />} />
              <Route path="/services/cost-optimization" element={<CostOptimizationPage />} />
              <Route path="/services/microsoft-365-copilot" element={<Microsoft365CopilotPage />} />
              <Route path="/services/cloud-engineering" element={<CloudEngineeringPage />} />
              <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCodePage />} />
              <Route path="/services/ai-engineering" element={<AIEngineeringPage />} />
              <Route path="/services/network-engineering" element={<NetworkEngineeringPage />} />

              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/admin" element={<BookingDashboard />} />
              <Route path="/admin/pricing" element={<BookingDashboard />} />
              <Route path="/admin/images" element={<ImageManagementPage />} />
              <Route path="/admin/bookings" element={<BookingDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

function PortfolioRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const eventName = path.startsWith('/tools/')
      ? 'tool_viewed'
      : path === '/' || path === '/services/security-compliance'
        ? 'landing_viewed'
        : 'page_view';

    trackPortfolioEvent(eventName, {
      page: path,
      is_security_compliance_offer: path === '/services/security-compliance',
    });
  }, [location.pathname, location.search]);

  return null;
}

export default App;
