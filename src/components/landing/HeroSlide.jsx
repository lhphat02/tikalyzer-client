import { useState } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import Button from '../common/Button';
import { sans } from '@/app/font';
import { useRouter } from 'next/navigation';

const HeroSlide = ({ onSlideChange }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative h-screen">
        <div className="relative flex items-center justify-center w-full h-4/5">
          <img
            src="https://plus.unsplash.com/premium_photo-1684751595672-cb030306ab79?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tiktok"
            className="absolute inset-0 object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-prim-1 opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4 px-4 md:space-y-4">
            <div className={['flex flex-col gap-4', sans.className].join(' ')}>
              <h1 className="text-3xl font-black text-center text-white md:text-7xl">
                tikalyzer
              </h1>
              <h2 className="text-xl font-semibold text-center text-white md:text-3xl">
                Get insights on your TikTok account
              </h2>
              <h2 className="text-sm font-medium text-center text-white md:text-xl">
                Analyze your all tiktok content and get predictions on your next
                post
              </h2>
            </div>

            <Button
              className="px-12 py-4 bg-white rounded-full hover:bg-prim-1 hover:text-white hover:border-white text-prim-1 "
              onClick={() => router.push('/analyze-user')}
            >
              <p className="text-lg font-semibold">Get started</p>
            </Button>
          </div>

          <div className="absolute left-0 z-20 flex justify-center w-full -bottom-20">
            <div className="w-20 h-20 p-2 duration-300 ease-in-out border-2 border-white rounded-full md:p-4 md:w-40 md:h-40 hover:scale-125">
              <Button
                className="w-full h-full bg-white border-0 rounded-full hover:bg-white"
                onClick={onSlideChange}
              >
                <ChevronDoubleDownIcon className="w-6 h-6 md:w-6 md:h-6 text-prim-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
