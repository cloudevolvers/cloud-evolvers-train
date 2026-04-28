import { motion } from 'framer-motion';
import { Target, CheckCircle, Clock, Book, Flask, Quotes } from '@phosphor-icons/react';
import { Eyebrow } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';

interface LearningObjective {
  id?: string;
  title: string;
  description: string;
  icon?: string;
}

interface TrainingModule {
  id?: string;
  title: string;
  description?: string;
  duration?: string;
  topics?: string[];
}

interface HandsOnLab {
  id?: string;
  title: string;
  description?: string;
  duration?: string;
}

interface PersonalStory {
  instructor: string;
  story: string;
}

interface TrainingShape {
  overview?: string;
  description?: string;
  personalStory?: PersonalStory;
  learningObjectives?: Array<LearningObjective | string>;
  modules?: TrainingModule[];
  handsOnLabs?: HandsOnLab[];
}

export default function TrainingDetailContent({ training }: { training: TrainingShape }) {
  const { t, isDutch } = useTranslations();

  const hasOverview = Boolean(training.overview || training.description);
  const objectives = training.learningObjectives ?? [];
  const modules = training.modules ?? [];
  const labs = training.handsOnLabs ?? [];

  return (
    <div className="space-y-16 sm:space-y-20">
      {hasOverview && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <Eyebrow>
            {t.training?.detail?.courseOverview || (isDutch ? 'Cursusoverzicht' : 'Course overview')}
          </Eyebrow>
          <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[color:var(--ed-ink-2)] max-w-2xl">
            {training.overview || training.description}
          </p>
        </motion.section>
      )}

      {training.personalStory && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="border-l-2 border-[color:var(--ed-accent)] pl-6 sm:pl-8 py-2 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <Quotes size={18} weight="fill" className="text-[color:var(--ed-accent)]" />
            <Eyebrow accent>
              {t.training?.detail?.personalStory || (isDutch ? 'Van de trainer' : 'From the trainer')}
            </Eyebrow>
          </div>
          <blockquote className="ed-display text-[20px] sm:text-[22px] leading-[1.4] text-[color:var(--ed-ink)] italic">
            &ldquo;{training.personalStory.story}&rdquo;
          </blockquote>
          <p className="mt-4 text-[14px] text-[color:var(--ed-ink-3)]">
            &mdash; {training.personalStory.instructor}
          </p>
        </motion.section>
      )}

      {objectives.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 pb-5 border-b border-[color:var(--ed-rule)]">
            <Target size={18} weight="regular" className="text-[color:var(--ed-ink-3)]" />
            <Eyebrow>
              {t.training?.detail?.learningObjectives || (isDutch ? 'Leerdoelen' : 'Learning objectives')}
            </Eyebrow>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  weight="regular"
                  className="mt-[3px] shrink-0 text-[color:var(--ed-accent)]"
                />
                <div className="min-w-0">
                  {typeof objective === 'string' ? (
                    <p className="text-[15px] leading-[1.55] text-[color:var(--ed-ink)]">{objective}</p>
                  ) : (
                    <>
                      <p className="text-[15px] font-600 text-[color:var(--ed-ink)] leading-[1.4]">
                        {objective.title}
                      </p>
                      {objective.description && (
                        <p className="mt-1 text-[14px] leading-[1.55] text-[color:var(--ed-ink-2)]">
                          {objective.description}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {modules.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between pb-5 border-b border-[color:var(--ed-rule)]">
            <div className="flex items-center gap-3">
              <Book size={18} weight="regular" className="text-[color:var(--ed-ink-3)]" />
              <Eyebrow>
                {t.training?.detail?.courseModules || (isDutch ? 'Modules' : 'Course modules')}
              </Eyebrow>
            </div>
            <span className="text-[12px] text-[color:var(--ed-ink-3)] font-mono">
              {modules.length.toString().padStart(2, '0')} {isDutch ? 'modules' : 'modules'}
            </span>
          </div>
          <ol className="mt-2 divide-y divide-[color:var(--ed-rule)]">
            {modules.map((mod, index) => (
              <li key={mod.id || index} className="py-7 first:pt-8">
                <div className="flex items-start gap-5">
                  <span className="ed-display text-[26px] sm:text-[30px] text-[color:var(--ed-ink-3)] leading-none shrink-0 w-12 sm:w-14">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h4 className="ed-display text-[20px] sm:text-[22px] leading-[1.2] text-[color:var(--ed-ink)]">
                        {mod.title}
                      </h4>
                      {mod.duration && (
                        <span className="inline-flex items-center gap-1 text-[12px] text-[color:var(--ed-ink-3)] font-mono">
                          <Clock size={12} weight="regular" />
                          {mod.duration}
                        </span>
                      )}
                    </div>
                    {mod.description && (
                      <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--ed-ink-2)]">
                        {mod.description}
                      </p>
                    )}
                    {mod.topics && mod.topics.length > 0 && (
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {mod.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-[color:var(--ed-ink-2)]"
                          >
                            <span
                              className="mt-[8px] h-[5px] w-[5px] rounded-full bg-[color:var(--ed-accent)] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>
      )}

      {labs.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 pb-5 border-b border-[color:var(--ed-rule)]">
            <Flask size={18} weight="regular" className="text-[color:var(--ed-ink-3)]" />
            <Eyebrow>{isDutch ? 'Hands-on labs' : 'Hands-on labs'}</Eyebrow>
          </div>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {labs.map((lab, index) => (
              <li
                key={lab.id || index}
                className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h5 className="text-[15px] font-600 text-[color:var(--ed-ink)] leading-[1.35]">
                    {lab.title}
                  </h5>
                  {lab.duration && (
                    <span className="inline-flex items-center gap-1 text-[11.5px] text-[color:var(--ed-ink-3)] font-mono shrink-0">
                      <Clock size={11} weight="regular" />
                      {lab.duration}
                    </span>
                  )}
                </div>
                {lab.description && (
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-[color:var(--ed-ink-2)]">
                    {lab.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </div>
  );
}
