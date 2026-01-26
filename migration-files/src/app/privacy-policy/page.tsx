import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Get the contact email from environment variables
const contactEmail = process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "privacy@xevolve.io";

export const viewport = {
  title: "Privacy Policy - xEvolve",
  description: "Our privacy policy explains how we collect, use, and protect your personal data",
};

export const metadata = {
  title: "Privacy Policy - xEvolve",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          At xEvolve, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
        
        <h2>2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>
        
        <h2>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
        
        <h2>4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
        
        <h2>5. Your Legal Rights</h2>
        <p>Under data protection laws, you have rights including:</p>
        <ul>
          <li><strong>Right to Access</strong> - You can ask for copies of your personal data.</li>
          <li><strong>Right to Rectification</strong> - You can ask us to rectify information you think is inaccurate or complete information you think is incomplete.</li>
          <li><strong>Right to Erasure</strong> - You can ask us to erase your personal data in certain circumstances.</li>
          <li><strong>Right to Restriction of Processing</strong> - You can ask us to restrict the processing of your information in certain circumstances.</li>
          <li><strong>Right to Object to Processing</strong> - You have the right to object to the processing of your personal data in certain circumstances.</li>
          <li><strong>Right to Data Portability</strong> - You can ask that we transfer the information you gave us to another organization, or to you, in certain circumstances.</li>
        </ul>
        
        <h2>6. Cookies</h2>
        <p>
          We use cookies solely for maintaining session states and improving your user experience. 
          Unlike many websites, we do not use cookies for tracking your online activities or for advertising purposes. 
          We respect your privacy and only collect the minimum amount of information needed to provide our services effectively.
        </p>
        <p>
          Our cookies are essential for the proper functioning of our website and are used exclusively for authenticating users, 
          remembering preferences, and ensuring the security of your session. These cookies do not collect any personal 
          information that could be used for advertising or tracking your behavior across different websites.
        </p>
        
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;last updated&quot; date at the top of this Privacy Policy.
        </p>
        
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">
            {contactEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
