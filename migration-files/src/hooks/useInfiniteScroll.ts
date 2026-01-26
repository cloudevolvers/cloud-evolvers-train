import { useState, useCallback } from 'react';

interface InfiniteScrollOptions {
  threshold?: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export function useInfiniteScroll(
  fetchNextPage: () => void,
  options: InfiniteScrollOptions
) {
  const { threshold = 200, hasNextPage, isFetchingNextPage } = options;

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (
      scrollTop + clientHeight >= scrollHeight - threshold &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, threshold]);

  return { handleScroll };
}
