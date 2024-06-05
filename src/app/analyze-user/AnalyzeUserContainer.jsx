'use client';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import UserChart from '@/components/analytics/UserChart';
import UserCarouselChart from '@/components/analytics/UserCarouselChart';
import Dialog from '@/components/common/Dialog';
import useDynamicPlaceholder from '@/hooks/useDynamicPlaceholder';

const AnalyzeUserContainer = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dynamicPlaceholder = useDynamicPlaceholder([
    'shopee_vn',
    'lazadavietnam',
    'schannelvn',
    'juno_okyo',
    'fukada0318',
    'toidi_codedao',
    'hoaa.hanassii',
    'theanh28entertainment',
  ]);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleInputChange = (value) => {
    setUsername(value);
  };

  const handleSubmit = () => {
    setSubmittedUsername(username);
  };

  const onCancleCloseChart = () => {
    setIsDialogOpen(false);
  };

  const onConfirmCloseChart = () => {
    setSubmittedUsername('');
    setIsDialogOpen(false);
  };

  return (
    <div className="justify-center w-full page-container">
      {submittedUsername ? (
        <UserCarouselChart
          username={submittedUsername.trim()}
          handleClose={openDialog}
        />
      ) : (
        <>
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
              placeholder={dynamicPlaceholder}
              name="channelName"
              type="text"
              handleInputChange={handleInputChange}
              handleKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <Button onClick={handleSubmit}>Confirm</Button>
          </section>
        </>
      )}
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Do you sure want to close the dashboard?"
        actions={
          <>
            <button
              className="px-4 py-2 text-white rounded bg-prim-1 hover:bg-prim-2"
              onClick={onConfirmCloseChart}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded text-prim-1 hover:bg-gray-300"
              onClick={onCancleCloseChart}
            >
              Cancel
            </button>
          </>
        }
      >
        <p>The analytics data will not be saved.</p>
      </Dialog>
    </div>
  );
};

export default AnalyzeUserContainer;
