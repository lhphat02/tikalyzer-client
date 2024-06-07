import React from 'react';
import Button from '../common/Button';
import {
  FireIcon,
  HashtagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const featureCategories = [
  {
    name: 'User Analytics',
    path: '/analyze-user',
    icon: <UserCircleIcon className="h-6 w-6" />,
  },
  {
    name: 'HashTag Analytics',
    path: '/analyze-hashtag',
    icon: <HashtagIcon className="h-6 w-6" />,
  },
  {
    name: 'Trend Analytics',
    path: '/analyze-trending',
    icon: <FireIcon className="h-6 w-6" />,
  },
];

const CategorySlide = ({ onSlideChange }) => {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <div className="items-center justify-center h-full gap-8 page-container">
      <h2
        className={`text-lg text-prim-1 md:text-3xl transition-all duration-1000 ease-in-out ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Explore our analytic tools
      </h2>

      <div className="flex flex-wrap justify-center gap-4 " ref={ref}>
        {featureCategories.map((category, index) => (
          <Button
            key={index}
            className={`rounded-md md:py-4 hover:shadow-lg transform transition-all duration-500 ease-in-out ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            onClick={() => router.push(category.path)}
          >
            {category.icon}
            <p className="text-xs md:text-base">{category.name}</p>
          </Button>
        ))}
      </div>

      <div
        className="flex justify-center gap-4 text-xl font-semibold underline cursor-pointer underline-offset-2 text-prim-1 hover:text-prim-2"
        onClick={onSlideChange}
      >
        See more
      </div>
    </div>
  );
};

export default CategorySlide;
