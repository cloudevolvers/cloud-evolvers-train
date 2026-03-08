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
        duration: t.duration,
        price: t.price,
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
    <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background">
      <SEO {...PAGE_SEO.training} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            {t?.training?.overview?.title || 'Training Courses'}
          </h1>
          <p className="text-muted-foreground">
            {t?.training?.overview?.subtitle || 'Azure & Microsoft courses by certified trainers'}
          </p>
        </div>

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
