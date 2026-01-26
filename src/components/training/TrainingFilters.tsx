import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface TrainingFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string | 'all';
  setSelectedCategory: (value: string | 'all') => void;
  selectedLevel: string | 'all';
  setSelectedLevel: (value: string | 'all') => void;
  sortBy: 'title' | 'level' | 'duration';
  setSortBy: (value: 'title' | 'level' | 'duration') => void;
  featuredOnly: boolean;
  setFeaturedOnly: (value: boolean) => void;
  categories: string[];
  t?: any; // Translation object
}

/**
 * TrainingFilters - Reusable filters component for training courses
 * Includes search, category, level, sort, and featured filters
 */
export function TrainingFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  sortBy,
  setSortBy,
  featuredOnly,
  setFeaturedOnly,
  categories,
  t
}: TrainingFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 mb-12"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div>
          <label htmlFor="search" className="text-sm font-medium mb-2 block text-foreground">
            {t?.training?.overview?.filters?.search || 'Search'}
          </label>
          <div className="relative">
            <MagnifyingGlass size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="search"
              type="text"
              placeholder={t?.training?.overview?.filters?.search || 'Search courses...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/50 border-white/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="text-sm font-medium mb-2 block text-foreground">
            Category
          </label>
          <Select value={selectedCategory} onValueChange={(value: string | 'all') => setSelectedCategory(value)}>
            <SelectTrigger className="bg-background/80 border-border/40 focus:border-primary">
              <SelectValue placeholder={`${t?.training?.overview?.filters?.all || 'All'} ${t?.training?.overview?.filters?.category || 'Categories'}s`} />
            </SelectTrigger>
            <SelectContent className="bg-popover backdrop-blur-xl">
              <SelectItem value="all">{t?.training?.overview?.filters?.all || 'All'} {t?.training?.overview?.filters?.category || 'Categories'}</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Level Filter */}
        <div>
          <label htmlFor="level" className="text-sm font-medium mb-2 block text-foreground">
            {t?.training?.overview?.filters?.difficultyLevel || 'Difficulty Level'}
          </label>
          <Select value={selectedLevel} onValueChange={(value: string | 'all') => setSelectedLevel(value)}>
            <SelectTrigger className="bg-background/80 border-border/40 focus:border-primary">
              <SelectValue placeholder={t?.training?.overview?.filters?.levels?.all || 'All Levels'} />
            </SelectTrigger>
            <SelectContent className="bg-popover backdrop-blur-xl">
              <SelectItem value="all">{t?.training?.overview?.filters?.levels?.all || 'All Levels'}</SelectItem>
              <SelectItem value="Beginner">{t?.training?.overview?.filters?.levels?.Beginner || 'Beginner'}</SelectItem>
              <SelectItem value="Intermediate">{t?.training?.overview?.filters?.levels?.Intermediate || 'Intermediate'}</SelectItem>
              <SelectItem value="Advanced">{t?.training?.overview?.filters?.levels?.Advanced || 'Advanced'}</SelectItem>
              <SelectItem value="Expert">{t?.training?.overview?.filters?.levels?.Expert || 'Expert'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <label htmlFor="sort" className="text-sm font-medium mb-2 block text-foreground">
            {t?.training?.overview?.filters?.sortBy || 'Sort By'}
          </label>
          <Select value={sortBy} onValueChange={(value: 'title' | 'level' | 'duration') => setSortBy(value)}>
            <SelectTrigger className="bg-background/80 border-border/40 focus:border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover backdrop-blur-xl">
              <SelectItem value="title">{t?.training?.overview?.filters?.sortOptions?.title || 'Title'} (A-Z)</SelectItem>
              <SelectItem value="level">{t?.training?.overview?.filters?.difficultyLevel || 'Difficulty Level'}</SelectItem>
              <SelectItem value="duration">{t?.training?.overview?.filters?.sortOptions?.duration || 'Duration'}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Only Checkbox */}
      <div className="flex items-center gap-3 mt-6">
        <Checkbox
          id="featured"
          checked={featuredOnly}
          onCheckedChange={(checked: boolean) => setFeaturedOnly(checked)}
        />
        <Label htmlFor="featured" className="text-sm font-medium cursor-pointer text-foreground">
          {t?.training?.overview?.filters?.featuredOnly || 'Show Featured Courses Only'}
        </Label>
      </div>
    </motion.div>
  );
}
