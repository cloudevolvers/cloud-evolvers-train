import Link from 'next/link';
import { ArrowLeft } from "lucide-react";

export const viewport = {
  title: "Cookie Policy - xEvolve",
  description: "Learn about how xEvolve uses cookies to enhance your browsing experience",
};

export const metadata = {
  title: "Cookie Policy - xEvolve",
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        
        <h2>How We Use Cookies</h2>
        <p>
          At xEvolve, we use cookies for several purposes, including:
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take such as logging in or filling in forms.</li>
          <li><strong>Functional cookies:</strong> These enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
          <li><strong>Analytical cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information. This helps us improve the website&apos;s structure and content.</li>
        </ul>
        
        <h2>Types of Cookies We Use</h2>
        <p>
          Our website uses the following types of cookies:
        </p>
        <ol>
          <li><strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser. They help our website recognize you as you navigate between pages.</li>
          <li><strong>Persistent cookies:</strong> These remain on your device after you close your browser until they expire or you delete them. They help remember your preferences for future visits.</li>
        </ol>
        
        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can usually find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. You can delete existing cookies, allow or block all cookies, or set preferences for certain websites.
        </p>
        <p>
          Please note that if you choose to disable cookies, some features of our website may not function properly.
        </p>
        
        <h2>Changes to Our Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@xevolve.io" className="text-blue-500 hover:underline">privacy@xevolve.io</a>.
        </p>
      </div>
    </div>
  );
}
