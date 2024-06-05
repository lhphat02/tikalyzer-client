'use client';

import Button from '@/components/common/Button';
import CategorySlide from '@/components/landing/CategorySlide';
import HeroSlide from '@/components/landing/HeroSlide';
import PredictSlide from '@/components/landing/PredictSlide';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRef } from 'react';

const Home = () => {
  const slideTwo = useRef(null);
  const slideThree = useRef(null);

  const scrollToSlide = (slide) => {
    slide.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full">
      <div
        className="fixed z-20 p-2 overflow-hidden duration-100 ease-in-out bg-white rounded-full shadow-md cursor-pointer md:p-4 right-7 bottom-7 hover:-translate-y-2 md:shadow-lg md:bottom-10 md:right-10"
        onClick={() => scrollToTop()}
      >
        <ArrowUpIcon className="w-4 h-4 md:w-6 md:h-6 text-prim-1" />
      </div>

      <div className="items-center md:gap-12 container-slide">
        <HeroSlide onSlideChange={() => scrollToSlide(slideTwo)} />
      </div>

      <div
        ref={slideTwo}
        className="items-center justify-center container-slide"
      >
        <CategorySlide onSlideChange={() => scrollToSlide(slideThree)} />
      </div>

      <div
        ref={slideThree}
        className="items-center justify-center container-slide"
      >
        <PredictSlide />
      </div>
    </div>
  );
};

export default Home;
