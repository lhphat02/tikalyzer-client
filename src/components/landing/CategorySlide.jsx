import React from 'react';
import Button from '../common/Button';
import {
  FireIcon,
  HashtagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

const featureCategories = [
  {
    name: 'User Analytics',
    path: '/analyze-user',
    icon: <UserCircleIcon class="h-6 w-6" />,
  },
  {
    name: 'HashTag Analytics',
    path: '/analyze-hashtag',
    icon: <HashtagIcon class="h-6 w-6" />,
  },
  {
    name: 'Trending Analytics',
    path: '/analyze-trending',
    icon: <FireIcon class="h-6 w-6" />,
  },
];

const CategorySlide = ({ onSlideChange }) => {
  const router = useRouter();

  return (
    <div className="items-center justify-center h-full gap-8 page-container">
      <h2 className="text-lg text-prim-1 md:text-3xl">
        Explore our analytic categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureCategories.map((category, index) => (
          <Button
            key={index}
            className="rounded-md md:py-4 hover:shadow-lg"
            onClick={() => router.push(category.path)}
          >
            {category.icon}
            <p className="text-xs md:text-base">{category.name}</p>
          </Button>
        ))}
      </div>
      {/* <Button outline className="rounded-md md:py-4 hover:shadow-lg">
        <p className="text-xs md:text-base">See all categories</p>
      </Button> */}

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
