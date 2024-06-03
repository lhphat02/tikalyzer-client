'use client';

import UserCarouselChart from '@/components/analytics/UserCarouselChart';
import Button from '@/components/common/Button';
import Carousel from '@/components/common/Carousel';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="justify-center w-full page-container">
      {/* <header className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <h1 className="text-3xl font-bold text-center text-prim-1">
          Welcome to Tikalyzer!
        </h1>

        <p className="text-xl text-center text-prim-2">
          Analyze your TikTok account and get insights on your audience
        </p>
      </header> */}

      <UserCarouselChart>
        <div className="flex items-center justify-center w-full h-full bg-red-500">
          <h2 className="text-white">Component 1</h2>
        </div>
        <div className="flex items-center justify-center h-full bg-green-500">
          <h2 className="text-white">Component 2</h2>
        </div>
        <div className="flex items-center justify-center h-full bg-blue-500">
          <h2 className="text-white">Component 3</h2>
        </div>
      </UserCarouselChart>

      {/* <Link
        href="/analyze-user"
        className="flex items-center justify-center gap-2 p-2"
      >
        <Button>
          <p>Get Started</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Link> */}
    </main>
  );
}
