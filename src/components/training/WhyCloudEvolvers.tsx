import { Flask, ForkKnife, UsersThree, Trophy } from '@phosphor-icons/react';

const differentiators = [
  {
    icon: Flask,
    title: 'Real-World Labs',
    description: 'Learn by doing with extensive hands-on labs built from real production scenarios',
  },
  {
    icon: ForkKnife,
    title: 'Lunch Included',
    description: 'Focus on learning — lunch and refreshments are on us',
  },
  {
    icon: UsersThree,
    title: 'Personal Attention',
    description: 'Maximum 15 participants per session for personalized guidance',
  },
  {
    icon: Trophy,
    title: 'Expert Instructor',
    description: 'Led by Yair Knijn, Principal Cloud Architect with hands-on enterprise experience',
  },
];

export default function WhyCloudEvolvers() {
  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Why Train With Us?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We believe the best way to learn cloud technology is by doing it — not watching slides.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-xl p-6 text-center hover:border-foreground/20 transition-colors"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" weight="fill" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
