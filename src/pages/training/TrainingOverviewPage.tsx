import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Funnel } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { getAllTrainings as getAllJSONTrainings } from '@/data/training-json';
import type { TrainingJSON } from '@/data/training-json/types';
import { useTranslations } from '@/hooks/use-translations';
import {
  TrainingFilters,
  TrainingCard,
  type CombinedTraining,
  type FilterState
} from '@/components/training/overview';
import { SEO, PAGE_SEO } from '@/components/SEO';
import WhyCloudEvolvers from '@/components/training/WhyCloudEvolvers';
import { PageHeroBg } from '@/components/PageHeroBg';

const TrainingOverviewPage: React.FC = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    searchTerm: '',
    selectedCategory: 'all',
    selectedLevel: 'all',
    featuredOnly: false,
    certificationOnly: false,
    sortBy: 'title'
  });

  const [allTrainings, setAllTrainings] = useState<CombinedTraining[]>([]);
  const { t } = useTranslations();

  const getTranslatedCourse = (training: CombinedTraining) => {
    return {
      title: training.title,
      description: training.description
    };
  };

  useEffect(() => {
    try {
      const jsonTrainings = getAllJSONTrainings();
      const convertedTrainings: CombinedTraining[] = jsonTrainings.map((t: TrainingJSON) => ({
        id: t.id,
        slug: t.slug,
        title: t.title,
        description: t.description,
        category: t.category,
        level: t.difficulty,
        duration: { days: t.duration.days, hours: t.duration.hours ?? 0, format: t.duration.format },
        featured: t.featured,
        icon: t.icon,
        learningObjectives: t.learningObjectives.map(obj => obj.description),
        prerequisites: t.prerequisites,
        targetAudience: t.targetAudience,
        certification: t.certification ? {
          available: t.certification.available,
          examCode: t.certification.examCode,
          examName: t.certification.name,
        } : undefined,
        tags: t.tags,
        maxParticipants: t.maxParticipants,
        instructor: {
          name: t.instructor.name,
          title: t.instructor.title,
          experience: (t.instructor as any).experience,
          certifications: t.instructor.certifications,
        },
        isJsonBased: true,
      }));
      setAllTrainings(convertedTrainings);
    } catch (error) {
      console.error('Error loading trainings:', error);
      setAllTrainings([]);
    }
  }, []);

  const filteredTrainings = useMemo(() => {
    let filtered = allTrainings.filter(training => {
      const searchMatch = !filterState.searchTerm ||
        training.title.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
        training.tags?.some(tag => tag.toLowerCase().includes(filterState.searchTerm.toLowerCase()));

      const categoryMatch = filterState.selectedCategory === 'all' || training.category === filterState.selectedCategory;
      const levelMatch = filterState.selectedLevel === 'all' || training.level === filterState.selectedLevel;
      const featuredMatch = !filterState.featuredOnly || training.featured;
      const certificationMatch = !filterState.certificationOnly || training.certification?.available;

      return searchMatch && categoryMatch && levelMatch && featuredMatch && certificationMatch;
    });

    filtered.sort((a, b) => {
      if (filterState.sortBy === 'level') {
        const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        return (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0);
      } else if (filterState.sortBy === 'duration') {
        const daysA = a.duration?.days || 0;
        const daysB = b.duration?.days || 0;
        return daysA - daysB;
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [allTrainings, filterState]);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    allTrainings.forEach(training => {
      stats[training.category] = (stats[training.category] || 0) + 1;
    });
    return stats;
  }, [allTrainings]);

  const formatDuration = (duration: { days: number; hours: number }) => {
    const days = duration?.days || 0;
    const hours = duration?.hours || 0;
    return days > 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : `${hours} hours`;
  };

  const clearFilters = () => {
    setFilterState({
      searchTerm: '',
      selectedCategory: 'all',
      selectedLevel: 'all',
      featuredOnly: false,
      certificationOnly: false,
      sortBy: 'title'
    });
  };

  return (
    <div className="relative min-h-screen pt-28 md:pt-32 pb-12 bg-background">
      <SEO {...PAGE_SEO.training} />
      <PageHeroBg />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Hero Section */}
        <div className="relative mb-12 rounded-[2rem] overflow-hidden border border-border/40 bg-gradient-to-b from-card/60 to-background/60 backdrop-blur-xl shadow-2xl dark:shadow-emerald-900/10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="p-8 md:p-12 lg:col-span-7 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Premium Tech Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.1]">
                {t?.training?.overview?.title || 'Master the Cloud.'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 mt-2">
                  Accelerate Your Impact.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                {t?.training?.overview?.subtitle || 'Elite Azure & Microsoft courses taught by certified practitioners. Real-world skills for modern engineering teams.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                  onClick={() => {
                    document.getElementById('training-filters')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Browse Courses
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold bg-background/50 backdrop-blur-sm border-border/60 hover:bg-muted/50 transition-all">
                    Request Custom Training
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full lg:col-span-5 w-full hidden md:block rounded-l-[3rem] overflow-hidden shadow-inner border-l border-border/40 my-8 mr-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent mix-blend-overlay z-10" />
              <img
                src="/images/cloud_training_hero.png"
                alt="Cloud Training Concept"
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-transform duration-[20s] hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <WhyCloudEvolvers />
        </div>

        <div id="training-filters" className="scroll-mt-32" />
        {/* Filters */}
        <TrainingFilters
          filterState={filterState}
          setSearchTerm={(value) => setFilterState(prev => ({ ...prev, searchTerm: value }))}
          setSelectedCategory={(value) => setFilterState(prev => ({ ...prev, selectedCategory: value }))}
          setSelectedLevel={(value) => setFilterState(prev => ({ ...prev, selectedLevel: value }))}
          setFeaturedOnly={(value) => setFilterState(prev => ({ ...prev, featuredOnly: value }))}
          setCertificationOnly={(value) => setFilterState(prev => ({ ...prev, certificationOnly: value }))}
          setSortBy={(value) => setFilterState(prev => ({ ...prev, sortBy: value }))}
          allTrainings={allTrainings}
          categoryStats={categoryStats}
          clearFilters={clearFilters}
          t={t}
        />

        {/* Results count */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Funnel size={14} />
          <span>{filteredTrainings.length} of {allTrainings.length} courses{filterState.searchTerm && ` matching "${filterState.searchTerm}"`}</span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
          {filteredTrainings.map((training) => (
            <TrainingCard
              key={training.slug}
              training={training}
              getTranslatedCourse={getTranslatedCourse}
              formatDuration={formatDuration}
              t={t}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredTrainings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              No courses match your filters. Try broadening your search.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        {filteredTrainings.length > 0 && (
          <div className="border border-border rounded-lg p-8 text-center mt-8">
            <h2 className="text-xl font-semibold mb-2 text-foreground">Need help choosing?</h2>
            <p className="text-muted-foreground mb-4">
              We can help you find the right course for your team's goals and experience level.
            </p>
            <Link to="/contact">
              <Button variant="outline">Get in touch</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingOverviewPage;
