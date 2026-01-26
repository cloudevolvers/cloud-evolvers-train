import Link from 'next/link';
import { ArrowLeft, BookOpen, Construction, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const viewport = {
  title: "Documentation - xEvolve",
  description: "Documentation and resources for xEvolve&apos;s Azure cloud management solutions",
};

export const metadata = {
  title: "Documentation - xEvolve",
};

export default function DocumentationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Resources and guides for using xEvolve&apos;s cloud management solutions
        </p>
      </div>
      
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 mb-12 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="md:flex-shrink-0">
          <Construction className="h-20 w-20 text-blue-500 mx-auto md:mx-0" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Documentation is Coming Soon</h2>
          <p className="text-lg mb-4">
            We&apos;re currently working on comprehensive documentation to help you get the most out of xEvolve&apos;s services.
          </p>
          <p className="text-muted-foreground">
            In the meantime, our support team is ready to assist you with any questions you may have about using our platform and services.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="bg-background/50 border border-border/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-blue-500/10 rounded-full p-3 inline-block">
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Blog Articles</h3>
            <p className="text-muted-foreground text-center mb-4">
              Check our blog for tutorials, best practices, and Azure insights
            </p>
            <div className="text-center">
              <Link href="/blog">
                <Button variant="outline">Visit Our Blog</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-background/50 border border-border/20">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-blue-500/10 rounded-full p-3 inline-block">
                <MailIcon className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Contact Support</h3>
            <p className="text-muted-foreground text-center mb-4">
              Get direct assistance from our technical support team
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-background/50 border border-border/20 md:col-span-2 lg:col-span-1">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-blue-500/10 rounded-full p-3 inline-block">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-8 w-8 text-blue-500"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Subscribe for Updates</h3>
            <p className="text-muted-foreground text-center mb-4">
              Get notified when our documentation is available
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-3 py-2 border border-input rounded-l-md bg-background"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Need immediate assistance with our services?
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Our Support Team
          </Button>
        </Link>
      </div>
    </div>
  );
}
