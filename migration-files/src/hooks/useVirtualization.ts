import { useState, useEffect, useMemo } from 'react';

interface VirtualizationOptions {
  itemHeight: number;
  containerHeight?: number;
  overscan?: number;
}

export function useVirtualization<T>(
  items: T[],
  options: VirtualizationOptions
) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const {
    itemHeight,
    containerHeight = 600,
    overscan = 3
  } = options;

  const visibleCount = Math.ceil(containerHeight / itemHeight);

  useEffect(() => {
    const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const newEndIndex = Math.min(
      items.length - 1,
      newStartIndex + visibleCount + 2 * overscan
    );

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [scrollTop, itemHeight, items.length, overscan, visibleCount]);

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1).map((item, index) => ({
      item,
      index: startIndex + index,
      style: {
        position: 'absolute' as const,
        top: (startIndex + index) * itemHeight,
        height: itemHeight,
        width: '100%'
      }
    }));
  }, [items, startIndex, endIndex, itemHeight]);

  const totalHeight = items.length * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return {
    visibleItems,
    totalHeight,
    handleScroll,
    startIndex,
    endIndex
  };
}
