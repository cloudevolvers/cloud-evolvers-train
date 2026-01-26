import React from 'react';
import { BookOpen, Cloud, Shield, Monitor, Zap, Target, Award, Users, Clock, Building } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-fundamentals',
  slug: 'azure-fundamentals',
  title: 'Azure Fundamentals (AZ-900)',
  description: 'Build foundational knowledge of Azure cloud services and core concepts',
  content: 'Comprehensive fundamentals training covering Azure core services, security, privacy, compliance, and pricing.',
  category: 'Azure',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic knowledge of computing concepts'],
  learningObjectives: [
    'Describe cloud computing concepts',
    'Describe Azure core services and solutions',
    'Describe Azure security, privacy, compliance, and trust'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Fundamentals', 'Cloud', 'AZ-900'],
  featured: true,
  certification: { available: true, name: 'AZ-900' },
  maxParticipants: 15
};
