import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Pricing - xEvolve",
  description: "Flexible pricing options for xEvolve's Azure cloud management and optimization services",
};

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center mb-6 text-sm text-blue-500 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Custom Pricing for Your Needs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide tailored pricing based on your organization&apos;s specific requirements and Azure environment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="bg-background/50 border border-border/20 relative">
          <div className="absolute top-0 inset-x-0 h-2 bg-blue-400 rounded-t-lg"></div>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>For small Azure environments</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">Contact Us</span>
              <span className="text-muted-foreground"> for pricing</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Basic Azure environment monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Cost optimization recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Monthly security assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Email support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button className="w-full">Contact Sales</Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="bg-background/50 border border-blue-500/30 relative shadow-lg scale-105 lg:scale-100 lg:transform lg:hover:scale-105 transition-transform z-10">
          <div className="absolute top-0 inset-x-0 h-2 bg-blue-600 rounded-t-lg"></div>
          <div className="absolute -top-4 inset-x-0 flex justify-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</span>
          </div>
          <CardHeader className="pt-8">
            <CardTitle>Business</CardTitle>
            <CardDescription>For medium-sized Azure deployments</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">Contact Us</span>
              <span className="text-muted-foreground"> for pricing</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Everything in Starter, plus:</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>24/7 environment monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Quarterly cloud optimization reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Priority email and phone support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="bg-background/50 border border-border/20 relative">
          <div className="absolute top-0 inset-x-0 h-2 bg-blue-400 rounded-t-lg"></div>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large or complex Azure estates</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">Contact Us</span>
              <span className="text-muted-foreground"> for pricing</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Everything in Business, plus:</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom integration solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Strategic cloud architecture planning</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>24/7 priority support with SLAs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Full-stack Azure management</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button className="w-full">Contact Sales</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      <div className="max-w-3xl mx-auto text-center bg-blue-900/20 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Every Azure environment is unique. Contact our team for a customized pricing plan that fits your specific needs and requirements.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Do you offer monthly or annual billing?</h3>
            <p className="text-muted-foreground">We offer both monthly and annual billing options. Annual plans come with a discount.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Can I switch plans later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time as your needs change.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Are there any long-term contracts?</h3>
            <p className="text-muted-foreground">We offer flexible terms with no long-term commitments required for standard plans.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Do you offer discounts for startups?</h3>
            <p className="text-muted-foreground">Yes, we have special pricing for startups and small businesses. Contact us for details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
