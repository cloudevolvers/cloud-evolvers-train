import { Flask, ForkKnife, UsersThree, Trophy } from '@phosphor-icons/react';

const differentiators = [
  {
    icon: Flask,
    title: 'Hands-on Labs',
    description: 'No death-by-PowerPoint. You get real labs on real Azure environments — the same scenarios we solve for our clients.',
  },
  {
    icon: ForkKnife,
    title: 'Lunch Is On Us',
    description: 'Good food, good coffee, all day. You focus on learning, we take care of the rest.',
  },
  {
    icon: UsersThree,
    title: 'Small Groups Only',
    description: 'Max 10 people per class. You actually get to ask questions and get help when you\'re stuck.',
  },
  {
    icon: Trophy,
    title: 'Taught by a Practitioner',
    description: 'Yaïr builds and runs Azure infrastructure daily. Not a slide-reader — someone who does the work.',
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
          We got tired of trainings where you sit and watch slides all day. So we built something better.
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
