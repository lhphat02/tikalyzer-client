'use client';
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PredictViewResult from '@/components/analytics/PredictViewResult';

const PredictVideoViewContainer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [submittedVideoUrl, setSubmittedVideoUrl] = useState('');

  const handleInputChange = (value) => {
    setVideoUrl(value);
  };

  const handleSubmit = () => {
    setSubmittedVideoUrl(videoUrl);
  };

  return (
    <container className="justify-center page-container">
      <header className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <h1 className="text-3xl font-bold text-center text-prim-1">
          Predict your video view count in next 90 days
        </h1>

        <p className="text-center text-prim-2">
          Enter the video url to predict the view count
        </p>
      </header>
      <section className="flex items-center justify-center gap-2 p-2">
        <Input
          placeholder="Enter video url"
          type="text"
          handleInputChange={handleInputChange}
        />
        <Button onClick={handleSubmit}>Confirm</Button>
      </section>

      {submittedVideoUrl && (
        <section className="flex items-center justify-center w-full p-10">
          <PredictViewResult videoUrl={submittedVideoUrl} />
        </section>
      )}
    </container>
  );
};

export default PredictVideoViewContainer;
