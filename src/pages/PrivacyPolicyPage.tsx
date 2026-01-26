import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

export function PrivacyPolicyPage() {
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
              <h1 className="text-green-600 dark:text-green-400 font-bold mb-8">Privacy Policy</h1>

              <div className="prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>
                  At Cloud Evolvers (operated by Spot Cloud B.V.), we respect your privacy and are committed to protecting your personal data.
                  This privacy policy will inform you about how we look after your personal data when you visit
                  our website and tell you about your privacy rights and how the law protects you.
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
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul>
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2>4. Data Sharing</h2>
                <p>
                  We may share your personal data with the parties set out below for the purposes set out in the table in paragraph 3 above:
                </p>
                <ul>
                  <li>Internal Third Parties as set out in the Glossary.</li>
                  <li>External Third Parties as set out in the Glossary.</li>
                  <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets.</li>
                </ul>

                <h2>5. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                  used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal
                  data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>

                <h2>6. Cookies</h2>
                <p>
                  We use cookies solely for maintaining session states and improving your user experience.
                  Unlike many websites, we do not use cookies for tracking your online activities or for advertising purposes.
                  We respect your privacy and only collect the minimum amount of information needed to provide our services effectively.
                </p>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                  We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@cloudevolvers.com" className="text-green-600 dark:text-green-500 hover:underline">
                    privacy@cloudevolvers.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
