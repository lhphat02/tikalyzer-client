import React from 'react';
import Button from '../common/Button';
import { useRouter } from 'next/navigation';

const PredictSlide = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-screen gap-8">
      <div className="relative flex items-center justify-center w-full bg-red-200 h-3/5">
        <img
          src="https://plus.unsplash.com/premium_photo-1661372012626-90b9e5001cea?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="employ"
          className="absolute inset-0 object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-80 md:opacity-80 bg-prim-1"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4 px-4 md:space-y-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-xl font-semibold text-center text-white md:text-4xl">
              Join now and get predictions your next TikTok post
            </h2>
            <p className="text-sm text-center text-white md:text-xl">
              Use our Machine Learning model to predict your next TikTok video
              and get insights on your account
            </p>
          </div>

          <Button
            outline
            className="px-8 py-4 bg-white hover:bg-slate-100"
            onClick={() => router.push('/predict-view')}
          >
            <p className="font-semibold">Try our features now</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PredictSlide;
