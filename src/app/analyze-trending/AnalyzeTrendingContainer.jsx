'use client';
import React from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Loading from '@/components/common/Loading';

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

      <Loading statusMessage="Getting data" />
    </container>
  );
};

export default AnalyzeTrendingrContainer;
