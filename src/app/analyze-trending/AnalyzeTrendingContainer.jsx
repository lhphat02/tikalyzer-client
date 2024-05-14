'use client';
import React from 'react';
import Loading from '@/components/common/Loading';
import TrendingChart from '@/components/analytics/TrendingChart';

const AnalyzeTrendingrContainer = () => {
  return (
    <container className="page-container">
      <header className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <h1 className="text-3xl font-bold text-center text-prim-1">
          Analyze trends on TikTok
        </h1>

        <p className="text-center text-prim-2">
          Get insights on current trending videos
        </p>
      </header>

      <TrendingChart />
    </container>
  );
};

export default AnalyzeTrendingrContainer;
