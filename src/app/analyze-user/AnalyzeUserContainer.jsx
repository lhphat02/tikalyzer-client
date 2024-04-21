'use client';
import React from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Loading from '@/components/common/Loading';
import Chart from '@/components/common/Chart';

const AnalyzeUserContainer = () => {
  return (
    <container className="page-container">
      <header className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <h1 className="text-3xl font-bold text-center text-prim-1">
          Analyze your TikTok account
        </h1>

        <p className="text-center text-prim-2">
          Enter your username to get insights on your videos
        </p>
      </header>

      <section className="flex items-center justify-center gap-2 p-2">
        <Input
          placeholder="Enter username"
          type="text"
          handleInputChange={(value) => console.log(value)}
        />
        <Button>Confirm</Button>
      </section>

      {/* <Loading statusMessage="Crawling data" /> */}
      {/* <Chart /> */}
    </container>
  );
};

export default AnalyzeUserContainer;
