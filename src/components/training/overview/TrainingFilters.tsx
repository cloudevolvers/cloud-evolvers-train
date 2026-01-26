import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  MagnifyingGlass,
  Star,
  Certificate,
  GraduationCap,
  Cloud,
  Target
} from '@phosphor-icons/react';
import { categoryIcons } from './constants';
import type { FilterState, CombinedTraining } from './types';

interface TrainingFiltersProps {
  filterState: FilterState;
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: string | 'all') => void;
  setSelectedLevel: (value: string | 'all') => void;
  setFeaturedOnly: (value: boolean) => void;
  setCertificationOnly: (value: boolean) => void;
  setSortBy: (value: 'title' | 'level' | 'duration') => void;
  allTrainings: CombinedTraining[];
  categoryStats: Record<string, number>;
  clearFilters: () => void;
  t: any;
}

export function TrainingFilters({
  filterState,
  setSearchTerm,
  setSelectedCategory,
  setSelectedLevel,
  setFeaturedOnly,
  setCertificationOnly,
  setSortBy,
  allTrainings,
  categoryStats,
  clearFilters,
  t
}: TrainingFiltersProps) {
  const hasActiveFilters = filterState.searchTerm ||
    filterState.selectedCategory !== 'all' ||
    filterState.selectedLevel !== 'all' ||
    filterState.featuredOnly ||
    filterState.certificationOnly;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <Card className="backdrop-blur-sm bg-card/60 border-border shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label htmlFor="search" className="text-sm font-medium mb-2 block text-foreground">
                {t?.training?.overview?.filters?.search || 'Search Courses'}
              </label>
              <div className="relative">
                <MagnifyingGlass className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder={t?.training?.overview?.filters?.search || 'Search courses...'}
                  value={filterState.searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-input focus:border-primary text-foreground"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full">
              <label htmlFor="category" className="text-sm font-medium mb-2 block text-foreground">Category</label>
              <Select value={filterState.selectedCategory} onValueChange={(value: string | 'all') => setSelectedCategory(value)}>
                <SelectTrigger className="bg-background border-input focus:border-primary text-foreground w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={4} className="z-[100] bg-popover backdrop-blur-xl max-h-[300px]">
                  <SelectItem value="all">All Categories ({allTrainings.length})</SelectItem>
                  {Object.keys(categoryStats).sort().map(category => (
                    <SelectItem key={category} value={category}>
                      {category} ({categoryStats[category] || 0})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level Filter */}
            <div className="w-full">
              <label htmlFor="level" className="text-sm font-medium mb-2 block text-foreground">Difficulty Level</label>
              <Select value={filterState.selectedLevel} onValueChange={(value: string | 'all') => setSelectedLevel(value)}>
                <SelectTrigger className="bg-background border-input focus:border-primary text-foreground w-full">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={4} className="z-[100] bg-popover backdrop-blur-xl">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div className="w-full">
              <label htmlFor="sort" className="text-sm font-medium mb-2 block text-foreground">Sort By</label>
              <Select value={filterState.sortBy} onValueChange={(value: 'title' | 'level' | 'duration') => setSortBy(value)}>
                <SelectTrigger className="bg-background border-input focus:border-primary text-foreground w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={4} className="z-[100] bg-popover backdrop-blur-xl">
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                  <SelectItem value="level">Difficulty Level</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Quick Filters</p>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Popular Courses */}
              {['AZ-900', 'AZ-104', 'AZ-305', 'AI-900'].map((courseCode) => {
                const courseExists = allTrainings.some(t =>
                  t.title.includes(courseCode) || t.slug.includes(courseCode.toLowerCase())
                );
                if (!courseExists) return null;

                return (
                  <Button
                    key={courseCode}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchTerm(courseCode);
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                    }}
                    className="flex items-center gap-1.5 font-semibold bg-accent/50 hover:bg-accent border-accent text-accent-foreground"
                  >
                    <GraduationCap size={14} weight="duotone" />
                    {courseCode}
                  </Button>
                );
              })}

              {/* Featured & Certification */}
              <Button
                variant={filterState.featuredOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setFeaturedOnly(!filterState.featuredOnly)}
                className="flex items-center gap-1.5"
              >
                <Star size={14} weight={filterState.featuredOnly ? "fill" : "regular"} />
                Featured
              </Button>

              <Button
                variant={filterState.certificationOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setCertificationOnly(!filterState.certificationOnly)}
                className="flex items-center gap-1.5"
              >
                <Certificate size={14} weight="duotone" />
                Certification
              </Button>

              {/* Difficulty Levels */}
              {[
                { level: 'Beginner', icon: '🌱' },
                { level: 'Intermediate', icon: '📈' },
                { level: 'Advanced', icon: '🎯' }
              ].map(({ level, icon }) => {
                const isActive = filterState.selectedLevel === level;
                return (
                  <Button
                    key={level}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(isActive ? 'all' : level)}
                    className="flex items-center gap-1.5"
                  >
                    <span className="text-sm">{icon}</span>
                    {level}
                  </Button>
                );
              })}

              {/* Category Quick Filters */}
              {['Azure', 'Microsoft 365', 'Security & Compliance', 'Power Platform', 'AI & Machine Learning'].map((category) => {
                const count = categoryStats[category] || 0;
                if (count === 0) return null;
                const isActive = filterState.selectedCategory === category;
                const CategoryIcon = categoryIcons[category]?.icon || Cloud;

                return (
                  <Button
                    key={category}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(isActive ? 'all' : category)}
                    className="flex items-center gap-1.5"
                  >
                    <CategoryIcon size={14} />
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex justify-end mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
