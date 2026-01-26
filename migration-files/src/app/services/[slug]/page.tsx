import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Fix params typing to match Next.js 15.2.0 convention
interface ServicePageProps {
  params: Promise<{ slug: string }>
}

// List of all available service pages
const AVAILABLE_SERVICES = [
  'azure-monitoring',
  'cloud-management',
  'cost-optimization',
  'security-compliance',
  'enterprise-file-transfer',
  'cloud-engineering',
  'infrastructure-as-code',
  'microsoft-365-copilot',
  'network-engineering',
  'ai-engineering'
];

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  return {
    title: `${slug} - xEvolve Services`,
    description: 'Learn about our professional services'
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Check if we have a dedicated page for this service
  if (AVAILABLE_SERVICES.includes(slug)) {
    // Redirect to the dedicated service page
    redirect(`/services/${slug}`);
  }
  
  // If service doesn't exist, redirect to services overview
  redirect('/services');
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';