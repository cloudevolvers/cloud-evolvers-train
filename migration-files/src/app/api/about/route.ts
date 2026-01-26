import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { getBrandConfig } from '@/lib/brand-config';

export const runtime = 'nodejs';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface AboutContent {
  title: string;
  heroImage: string;
  content: string;
  team: TeamMember[];
  meta: {
    description: string;
    updatedAt: string;
  };
}

// Default about page content for xEvolve
const defaultAboutContent: AboutContent = {
  title: 'About xEvolve',
  heroImage: '',
  content: `
    <p>xEvolve is a cloud consultancy founded by Yair Knijn, bringing 15 years of Microsoft stack experience to businesses across Europe. We believe in straightforward solutions that deliver real value without unnecessary complexity.</p>
    <p>We focus on practical implementations that solve real business challenges using Azure and Microsoft technologies.</p>
    <h2>Our Mission</h2>
    <p>To provide clear insights and expert guidance for businesses navigating the Microsoft cloud ecosystem.</p>
    <h2>Our Team</h2>
    <p>Led by our CEO who brings 15 years of extensive experience in cloud technologies and Azure environments, our team consists of dedicated professionals who share a common passion for cloud optimization and excellence.</p>
  `,
  team: [
    { 
      name: 'Yair Knijn', 
      role: 'Founder & CEO', 
      image: '', 
      bio: 'Over 15 years of experience with Microsoft technologies and cloud solutions.' 
    }
  ],
  meta: {
    description: 'Learn more about xEvolve, our team, and our approach to Microsoft Azure cloud consulting.',
    updatedAt: new Date().toISOString()
  }
};

// Cloud Evolvers about page content
const cloudEvolversAboutContent: AboutContent = {
  title: 'About Cloud Evolvers',
  heroImage: '',
  content: `
    <p>Cloud Evolvers is een gespecialiseerd Microsoft Certified Training (MCT) en consultancybedrijf dat in 2023 werd opgericht met meer dan 15 jaar ervaring in de IT-sector. Wij maken onderdeel uit van Spot Cloud en onze passie voor technologie en automatisering motiveert ons om klanten te ondersteunen bij het excelleren binnen het Microsoft-ecosysteem.</p>
    
    <p>Cloud Evolvers is a specialized Microsoft Certified Training (MCT) and consulting company, founded in 2023 with over 15 years of IT experience. We are part of Spot Cloud, and our passion for technology and automation drives us to help customers excel in the Microsoft ecosystem.</p>
    
    <h2>Onze Missie / Our Mission</h2>
    <p><strong>Nederlands:</strong> Wij verzorgen end-to-end implementaties en trainingen binnen het Microsoft-ecosysteem, waarbij wij onze passie voor automatisering inzetten om klanten te helpen hun doelstellingen te realiseren. Onze oprichter, Yaïr Knijn, koestert al vanaf zijn kinderjaren een passie voor technologie.</p>
    
    <p><strong>English:</strong> We provide end-to-end implementations and training in the Microsoft ecosystem, using our love for automation to help customers achieve their goals. Our founder, Yaïr Knijn, has nurtured a passion for technology since his childhood.</p>
    
    <h2>Waarom Spot Cloud? / Why Spot Cloud?</h2>
    <p><strong>Nederlands:</strong> De naam Spot Cloud is ontstaan uit onze liefde voor honden, met name Dalmatiërs. Net zoals de vlekken van een Dalmatiër uniek zijn, leveren wij unieke cloud-oplossingen aan onze klanten.</p>
    
    <p><strong>English:</strong> The name Spot Cloud stems from our love for dogs, specifically Dalmatians. Just like a Dalmatian's spots are unique, we deliver unique cloud solutions to our customers.</p>
    
    <h2>Onze Specialiteiten / Our Specialties</h2>
    <ul>
      <li><strong>Microsoft Certified Training (MCT)</strong> - Azure en Microsoft 365 trainingen / Azure and Microsoft 365 training</li>
      <li><strong>End-to-end implementaties</strong> - Volledige Microsoft stack oplossingen / Complete Microsoft stack solutions</li>
      <li><strong>Automatisering</strong> - Efficiëntie door intelligente automatisering / Efficiency through intelligent automation</li>
      <li><strong>Consultancy</strong> - Strategisch advies voor cloudtransformatie / Strategic advice for cloud transformation</li>
    </ul>
    
    <h2>Onze Visie / Our Vision</h2>
    <p><strong>Nederlands:</strong> Wij geloven in praktische, resultaatgerichte training die direct toepasbaar is in de werkomgeving. Door onze uitgebreide ervaring met Azure-implementaties kunnen wij training aanbieden die verder gaat dan theorie - wij delen echte praktijkervaringen en best practices.</p>
    
    <p><strong>English:</strong> We believe in practical, results-oriented training that is immediately applicable in the workplace. Through our extensive experience with Azure implementations, we can offer training that goes beyond theory - we share real-world experiences and best practices.</p>
  `,
  team: [
    { 
      name: 'Yaïr Knijn', 
      role: 'Oprichter & CEO / Founder & CEO', 
      image: '', 
      bio: 'Meer dan 15 jaar ervaring met Microsoft-technologieën en cloud-oplossingen. Passie voor technologie sinds de kindertijd, nu Microsoft Certified Trainer. / Over 15 years of experience with Microsoft technologies and cloud solutions. Passion for technology since childhood, now Microsoft Certified Trainer.' 
    }
  ],
  meta: {
    description: 'Leer meer over Cloud Evolvers, ons team en onze aanpak voor Microsoft Azure en Microsoft 365 training en consultancy. / Learn more about Cloud Evolvers, our team, and our approach to Microsoft Azure and Microsoft 365 training and consulting.',
    updatedAt: new Date().toISOString()
  }
};

// Helper function to get the content file path based on environment
const getContentFilePath = () => {
  const isDev = process.env.NODE_ENV === 'development';
  return isDev
    ? path.join(process.cwd(), '.local', 'about', 'content.json')
    : '/home/data/about/content.json';
};

// Helper to ensure the directory exists
const ensureDirectoryExists = async (filePath: string) => {
  const dirname = path.dirname(filePath);
  try {
    await fs.mkdir(dirname, { recursive: true });
    return true;
  } catch (error) {
    console.error('Error creating directory:', error);
    return false;
  }
};

// Initialize the about content file if it doesn't exist
const initializeContentIfNeeded = async (): Promise<boolean> => {
  try {
    const filePath = getContentFilePath();
    await ensureDirectoryExists(filePath);
    
    try {
      await fs.access(filePath);
      // File exists, no need to initialize
      return true;
    } catch {
      // File doesn't exist, create it
      await fs.writeFile(filePath, JSON.stringify(defaultAboutContent, null, 2));
      return true;
    }
  } catch (error) {
    console.error('Error initializing about content file:', error);
    return false;
  }
};

// GET handler for fetching about page content
export async function GET() {
  try {
    // Get the current brand configuration
    const brandConfig = getBrandConfig();
    const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
    
    // Use brand-specific content
    const defaultContent = isCloudEvolvers ? cloudEvolversAboutContent : defaultAboutContent;
    
    await initializeContentIfNeeded();
    const filePath = getContentFilePath();
    
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const parsedContent = JSON.parse(content);
      
      // If the stored content doesn't match the current brand, return the default for this brand
      const expectedTitle = isCloudEvolvers ? 'About Cloud Evolvers' : 'About xEvolve';
      if (parsedContent.title !== expectedTitle) {
        return NextResponse.json(defaultContent);
      }
      
      return NextResponse.json(parsedContent);
    } catch (error) {
      console.error('Error reading about content file:', error);
      return NextResponse.json(defaultContent);
    }
  } catch (error) {
    console.error('Error in GET handler:', error);
    const brandConfig = getBrandConfig();
    const isCloudEvolvers = brandConfig.name === 'Cloud Evolvers';
    return NextResponse.json(isCloudEvolvers ? cloudEvolversAboutContent : defaultAboutContent);
  }
}

// POST handler for updating about page content
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data || typeof data !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid data format' }, 
        { status: 400 }
      );
    }
    
    // Initialize if needed
    await initializeContentIfNeeded();
    
    // Update updatedAt timestamp
    const updatedData = {
      ...data,
      meta: {
        ...data.meta,
        updatedAt: new Date().toISOString()
      }
    };
    
    // Save the updated content
    const filePath = getContentFilePath();
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'About page content updated successfully' 
    });
  } catch (error) {
    console.error('Error updating about page content:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update about page content' }, 
      { status: 500 }
    );
  }
}
