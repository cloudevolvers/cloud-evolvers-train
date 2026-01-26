import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Lightning, Robot, Sparkle, PresentationChart } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'microsoft-365-copilot-mastery',
  slug: 'microsoft-365-copilot-mastery',
  title: 'Microsoft 365 Copilot Mastery',
  description: 'Unleash the power of AI in your daily work with Microsoft 365 Copilot',
  category: 'Microsoft 365',
  level: 'Intermediate',
  duration: { days: 1, hours: 8 },
  price: { amount: 595, currency: 'EUR' },
  featured: true,
  icon: 'Lightning',
  
  learningObjectives: [
    'Master Copilot across all M365 applications',
    'Create effective prompts for maximum productivity',
    'Implement AI-driven workflow automation',
    'Optimize content creation and analysis',
    'Design intelligent presentation workflows',
    'Apply AI ethics and best practices'
  ],
  
  prerequisites: [
    'Microsoft 365 experience required',
    'Basic understanding of AI concepts',
    'Familiarity with Word, Excel, PowerPoint, Outlook',
    'Teams collaboration experience'
  ],
  
  targetAudience: [
    'Knowledge workers and professionals',
    'Business analysts and managers',
    'Content creators and marketers',
    'Microsoft 365 power users'
  ],
  
  certification: { available: false },
  tags: ['Microsoft 365', 'Copilot', 'AI', 'Productivity', 'Automation'],
  maxParticipants: 15,
  
  instructor: {
    name: 'Copilot Productivity Expert',
    title: 'Microsoft Certified Trainer',
    experience: '5+ years',
    certifications: ['MS-900', 'MS-500', 'MS-700', 'AI-900']
  }
};

export default function Microsoft365CopilotMasteryContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-violet-950/20 via-fuchsia-950/20 to-violet-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-fuchsia-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-fuchsia-200/20 to-violet-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl text-white shadow-lg">
              <Lightning className="h-8 w-8" />
            </div>
            <div>
              <div className="text-violet-400 font-medium">Intermediate Level</div>
              <div className="text-sm text-muted-foreground font-medium">AI Productivity</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Microsoft 365
            <span className="text-violet-400 block">Copilot Mastery</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Unleash the power of AI in your daily work with Microsoft 365 Copilot. Transform how you work, think, and create with cutting-edge AI tools across all M365 applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-violet-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">1 Day</div>
                <div className="text-sm text-muted-foreground font-medium">Intensive Workshop</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-violet-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 15</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-violet-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Featured</div>
                <div className="text-sm text-muted-foreground font-medium">Popular Course</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning Objectives */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white font-bold">Learning Objectives</h2>
        <div className="grid gap-4">
          {trainingMetadata.learningObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{objective}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-white font-bold">Course Modules</h2>
        <div className="space-y-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-violet-900/30 p-2 rounded-lg">
                <Lightning className="text-violet-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Copilot Fundamentals</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Understanding AI assistance paradigm</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Prompt engineering best practices</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Context and conversation management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Privacy and security considerations</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fuchsia-900/30 p-2 rounded-lg">
                <PresentationChart className="text-fuchsia-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Copilot in Office Apps</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Word: Document creation and editing</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Excel: Data analysis and visualization</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> PowerPoint: Intelligent presentation design</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Outlook: Email optimization and scheduling</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Robot className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Advanced AI Workflows</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Teams meeting summaries and insights</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> SharePoint content discovery</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Power Platform integration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Cross-application workflows</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-950/20 p-2 rounded-lg">
                <Sparkle className="text-pink-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Productivity Optimization</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Personal productivity patterns</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Team collaboration enhancement</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Measurement and analytics</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Change management strategies</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Prerequisites & Target Audience */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-white font-bold">Prerequisites</h2>
          <div className="grid gap-4">
            {trainingMetadata.prerequisites.map((prereq, index) => (
              <div key={index} className="bg-fuchsia-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-fuchsia-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{prereq}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-white font-bold">Target Audience</h2>
          <div className="grid gap-4">
            {trainingMetadata.targetAudience.map((audience, index) => (
              <div key={index} className="bg-violet-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-violet-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
