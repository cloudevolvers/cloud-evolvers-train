'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'rounded' | 'circle';
  animate?: boolean;
}

export function Skeleton({ 
  className = '', 
  variant = 'default',
  animate = true 
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 bg-[length:200%_100%]';
  const animationClasses = animate ? 'animate-[shimmer_2s_infinite]' : '';
  
  const variantClasses = {
    default: 'rounded-md',
    rounded: 'rounded-lg',
    circle: 'rounded-full'
  };

  return (
    <div 
      className={`${baseClasses} ${animationClasses} ${variantClasses[variant]} ${className}`}
      style={{
        backgroundImage: animate ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' : undefined
      }}
    />
  );
}

export function ShowcaseItemSkeleton() {
  return (
    <div className="group bg-blue-950/30 rounded-lg overflow-hidden border border-blue-500/20 p-3">
      <div className="flex items-center gap-4">
        {/* Image skeleton */}
        <Skeleton className="h-24 w-36 flex-shrink-0" variant="rounded" />
        
        <div className="flex-grow space-y-2">
          {/* Title and badge skeleton */}
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-5 w-16" variant="rounded" />
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
          
          {/* Button skeleton */}
          <div className="flex justify-end">
            <Skeleton className="h-6 w-20" variant="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="bg-blue-950/30 rounded-lg overflow-hidden border border-blue-500/20 p-3">
      <div className="flex items-center gap-3">
        {/* Image skeleton */}
        <Skeleton className="h-16 w-24 flex-shrink-0" variant="rounded" />
        
        <div className="flex-grow space-y-2">
          {/* Title skeleton */}
          <Skeleton className="h-4 w-full" />
          
          {/* Meta info skeleton */}
          <div className="flex gap-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>
          
          {/* Category badge skeleton */}
          <Skeleton className="h-5 w-20" variant="rounded" />
        </div>
      </div>
    </div>
  );
}

export function DashboardMetricSkeleton() {
  return (
    <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 p-3 rounded-lg border border-blue-700/30">
      <div className="space-y-2">
        {/* Icon and label */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" variant="circle" />
          <Skeleton className="h-3 w-20" />
        </div>
        
        {/* Value */}
        <Skeleton className="h-6 w-16" />
        
        {/* Secondary text */}
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

export function PerformanceInsightsSkeleton() {
  return (
    <div className="space-y-4">
      {/* Header skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-6 w-6" variant="rounded" />
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-16 ml-auto" variant="rounded" />
      </div>

      {/* Metrics grid skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-500/20 rounded-lg p-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" variant="circle" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-3 w-3" variant="circle" />
              </div>
              
              <Skeleton className="h-6 w-16" />
              
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-1 w-16" variant="rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary skeleton */}
      <div className="bg-gradient-to-r from-blue-950/40 to-purple-950/40 rounded-lg p-4 border border-blue-500/20">
        <Skeleton className="h-4 w-32 mb-3" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-1">
              <Skeleton className="h-6 w-12 mx-auto" />
              <Skeleton className="h-3 w-16 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrainingCardSkeleton() {
  return (
    <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
      <div className="relative overflow-hidden rounded-t-lg">
        <Skeleton className="h-52 w-full" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Skeleton className="h-6 w-20" variant="rounded" />
          <Skeleton className="h-6 w-24" variant="rounded" />
        </div>
        <div className="absolute top-4 right-4">
          <Skeleton className="h-8 w-8" variant="circle" />
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        
        <div className="flex items-center gap-6 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" variant="circle" />
            <Skeleton className="h-4 w-8" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" variant="circle" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" variant="circle" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-border/50">
          <Skeleton className="h-8 w-16" variant="rounded" />
          <div className="flex gap-1">
            <Skeleton className="h-6 w-12" variant="rounded" />
            <Skeleton className="h-6 w-16" variant="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrainingPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-background py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <Skeleton className="h-20 w-20" variant="circle" />
            </div>
            <Skeleton className="h-16 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-4xl mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-6">
              <Skeleton className="h-12 w-48" variant="rounded" />
              <Skeleton className="h-12 w-40" variant="rounded" />
              <Skeleton className="h-12 w-44" variant="rounded" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Skeleton */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="h-6 w-6" variant="circle" />
              <Skeleton className="h-6 w-48" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Skeleton className="h-11 w-full" variant="rounded" />
              <Skeleton className="h-11 w-full" variant="rounded" />
              <Skeleton className="h-11 w-full" variant="rounded" />
              <Skeleton className="h-11 w-full" variant="rounded" />
            </div>
          </div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-card/80 to-card/40 rounded-lg p-6 border border-border/50">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-12" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-12 w-12" variant="rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Training Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <TrainingCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
