'use client';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import UserChart from '@/components/analytics/UserChart';

const AnalyzeUserContainer = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleInputChange = (value) => {
    setUsername(value);
  };

  const handleSubmit = () => {
    setSubmittedUsername(username);
  };

  return (
    <div className="page-container">
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
          handleInputChange={handleInputChange}
        />
        <Button handleClick={handleSubmit}>Confirm</Button>
      </section>
      {submittedUsername && (
        <section className="flex w-full items-center justify-center p-10">
          <UserChart username={submittedUsername} />
        </section>
      )}
    </div>
  );
};

export default AnalyzeUserContainer;
