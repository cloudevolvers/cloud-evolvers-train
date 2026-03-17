import { Flask, ForkKnife, UsersThree } from '@phosphor-icons/react';

const badges = [
  { icon: Flask, label: 'Hands-on Labs', color: 'text-blue-600 dark:text-blue-400' },
  { icon: ForkKnife, label: 'Lunch Included', color: 'text-emerald-600 dark:text-emerald-400' },
  { icon: UsersThree, label: 'Max 10 Participants', color: 'text-purple-600 dark:text-purple-400' },
];

export default function TrainingBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
        >
          <badge.icon className={`h-4 w-4 ${badge.color}`} weight="fill" />
          {badge.label}
        </span>
      ))}
    </div>
  );
}
