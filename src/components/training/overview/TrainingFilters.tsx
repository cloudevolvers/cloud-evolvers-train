import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  MagnifyingGlass,
  Star,
  Certificate,
  X,
} from '@phosphor-icons/react';
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
    <div className="mb-6 space-y-4">
      {/* Main filters row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
        {/* Search */}
        <div className="lg:col-span-2">
          <label htmlFor="search" className="text-sm font-medium mb-1.5 block text-foreground">
            {t?.training?.overview?.filters?.search || 'Search'}
          </label>
          <div className="relative">
            <MagnifyingGlass className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search by name, tag, or keyword..."
              value={filterState.searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium mb-1.5 block text-foreground">Category</label>
          <Select value={filterState.selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4} className="z-[100]">
              <SelectItem value="all">All ({allTrainings.length})</SelectItem>
              {Object.keys(categoryStats).sort().map(category => (
                <SelectItem key={category} value={category}>
                  {category} ({categoryStats[category]})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Level */}
        <div>
          <label className="text-sm font-medium mb-1.5 block text-foreground">Level</label>
          <Select value={filterState.selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4} className="z-[100]">
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <label className="text-sm font-medium mb-1.5 block text-foreground">Sort</label>
          <Select value={filterState.sortBy} onValueChange={(value: 'title' | 'level' | 'duration') => setSortBy(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4} className="z-[100]">
              <SelectItem value="title">Name</SelectItem>
              <SelectItem value="level">Level</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Toggle filters */}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant={filterState.featuredOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setFeaturedOnly(!filterState.featuredOnly)}
        >
          <Star size={14} weight={filterState.featuredOnly ? "fill" : "regular"} className="mr-1.5" />
          Featured
        </Button>

        <Button
          variant={filterState.certificationOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setCertificationOnly(!filterState.certificationOnly)}
        >
          <Certificate size={14} className="mr-1.5" />
          With Certification
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground"
          >
            <X size={14} className="mr-1" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
