import { Flask, ForkKnife, UsersThree, Trophy } from '@phosphor-icons/react';

const differentiators = [
  {
    icon: Flask,
    title: 'Hands-on Labs',
    description: 'Real labs on real Azure environments — not slides.',
  },
  {
    icon: ForkKnife,
    title: 'Lunch Included',
    description: 'Good food, good coffee, all day. On us.',
  },
  {
    icon: UsersThree,
    title: 'Max 10 People',
    description: 'Small groups. You get actual help when stuck.',
  },
  {
    icon: Trophy,
    title: 'Practitioner-Led',
    description: 'Taught by someone who builds Azure infra daily.',
  },
];

export default function WhyCloudEvolvers() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8 py-4 px-5 rounded-xl bg-muted/50 border border-border">
      <span className="text-sm font-semibold text-foreground tracking-wide uppercase">Why us</span>
      <span className="hidden sm:block w-px h-5 bg-border" />
      {differentiators.map((item) => (
        <div key={item.title} className="flex items-center gap-2">
          <item.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" weight="fill" />
          <span className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{item.title}</span> — {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
