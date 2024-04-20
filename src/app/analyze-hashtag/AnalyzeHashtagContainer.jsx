'use client';
import React from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Loading from '@/components/common/Loading';

const AnalyzeHashtagContainer = () => {
  return (
    <container className="page-container">
      <header className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <h1 className="text-3xl font-bold text-center text-prim-1">
          Analyze #hashtags on TikTok
        </h1>

        <p className="text-center text-prim-2">
          Enter hashtag to get insights on the videos
        </p>
      </header>

      <section className="flex items-center justify-center gap-2 p-2">
        <Input
          placeholder="Enter hashtag"
          type="text"
          handleInputChange={(value) => console.log(value)}
        />
        <Button>Confirm</Button>
      </section>

      {/* <Loading statusMessage="Crawling data" /> */}
    </container>
  );
};

export default AnalyzeHashtagContainer;
