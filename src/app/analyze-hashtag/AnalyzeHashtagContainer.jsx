'use client';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Loading from '@/components/common/Loading';
import HashtagChart from '@/components/analytics/HashtagChart';

const AnalyzeHashtagContainer = () => {
  const [hashtag, setHashtag] = useState('');
  const [submittedHashtag, setSubmittedHashtag] = useState('');

  const handleInputChange = (value) => {
    setHashtag(value);
  };

  const handleSubmit = () => {
    setSubmittedHashtag(hashtag);
  };

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
          handleInputChange={handleInputChange}
        />
        <Button handleClick={handleSubmit}>Confirm</Button>
      </section>

      {submittedHashtag && (
        <section className="flex w-full items-center justify-center p-10">
          <HashtagChart hashtag={submittedHashtag} />
        </section>
      )}
    </container>
  );
};

export default AnalyzeHashtagContainer;
