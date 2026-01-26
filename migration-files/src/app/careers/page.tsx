import Link from 'next/link';
import { ArrowLeft, Briefcase, User, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Careers - xEvolve",
  description: "Join our team of cloud experts at xEvolve",
};

export default function CareersPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re on a mission to help businesses optimize their cloud environments and make the most of their Azure investments.
        </p>
      </div>
      
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Current Openings</h2>
        </div>
        
        <p className="text-lg mb-6">
          We are not currently hiring for any positions, but we&apos;re always interested in connecting with talented professionals in the cloud space.
        </p>
        
        <p>
          If you&apos;re passionate about Microsoft Azure, cloud optimization, or security and would like to be considered for future opportunities, please submit your information below and we&apos;ll keep you in mind as our team grows.
        </p>
      </div>
      
      <Card className="bg-background/50 border border-border/20">
        <CardHeader>
          <CardTitle>Stay Connected</CardTitle>
          <CardDescription>Submit your information for future opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Your name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" type="email" placeholder="Your email address" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Areas of Expertise</label>
              <Input placeholder="e.g., Azure Cloud Management, Security Compliance" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea 
                placeholder="Tell us about your experience and interest in xEvolve"
                className="min-h-32"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4 mr-2" />
            Submit Application
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
