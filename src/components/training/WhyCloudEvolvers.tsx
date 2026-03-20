import { Flask, ForkKnife, UsersThree, Trophy } from '@phosphor-icons/react';

const differentiators = [
  {
    icon: Flask,
    title: 'Hands-on Labs',
    description: 'Real labs on real Azure environments — not slides.',
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-500',
  },
  {
    icon: ForkKnife,
    title: 'Lunch Included',
    description: 'Good food, good coffee, all day. On us.',
    color: 'from-orange-500/20 to-red-500/20 text-orange-500',
  },
  {
    icon: UsersThree,
    title: 'Max 10 People',
    description: 'Small groups. You get actual help when stuck.',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-500',
  },
  {
    icon: Trophy,
    title: 'Practitioner-Led',
    description: 'Taught by someone who builds Azure infra daily.',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-500',
  },
];

export default function WhyCloudEvolvers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {differentiators.map((item) => (
        <div key={item.title} className="group relative overflow-hidden rounded-2xl bg-card p-6 border border-border/50 hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:shadow-none dark:hover:shadow-emerald-500/5">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />

          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
            <item.icon className="h-6 w-6" weight="duotone" />
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
