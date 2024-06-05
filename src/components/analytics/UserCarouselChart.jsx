import useUserVisualization from '@/hooks/useUserVisualization';
import React, { useState, useEffect } from 'react';
import Loading from '../common/Loading';
import Image from 'next/image';
import Carousel from '../common/Carousel';
import {
  DocumentArrowDownIcon,
  LightBulbIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Button from '../common/Button';
import { formatLargeNumber } from '@/utils/format';

const loadingTexts = [
  'Getting user information...',
  'Collecting videos...',
  'Loading video analytics...',
  'Analyzing user data...',
  'Generating insights...',
];

const UserCarouselChart = ({ username, handleClose }) => {
  const { data, loading, error } = useUserVisualization({ username });
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (data) {
      setShowChart(true);
    }
  }, [data]);

  if (loading) {
    return <Loading statusMessage={loadingTexts} interval={5000} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let analyticsData = data.data;

  const chartData = [
    {
      title: 'Distribution of Views over videos',
      url: analyticsData.viewDistributionChartUrl,
    },
    {
      title: 'Distribution of Likes over videos',
      url: analyticsData.likeDistributionChartUrl,
    },
    {
      title: 'Distribution of Comments over videos',
      url: analyticsData.commentDistributionChartUrl,
    },
    {
      title: 'Distribution of Shares over videos',
      url: analyticsData.shareDistributionChartUrl,
    },
    {
      title: 'Distribution of Saves over videos',
      url: analyticsData.saveDistributionChartUrl,
    },
    {
      title: 'Top video frame size with most views',
      url: analyticsData.topSizePieChartUrl,
    },
    {
      title: 'Top video video duration with most views',
      url: analyticsData.topDurationChartUrl,
    },
    {
      title: 'Top 3 days of week with most views',
      url: analyticsData.topDayOfWeekUrl,
    },
    {
      title: 'Videos created by day',
      url: analyticsData.dayCreateChartUrl,
    },
    {
      title: 'Videos created by month',
      url: analyticsData.monthCreateChartUrl,
    },
    {
      title: 'Videos created by year',
      url: analyticsData.yearCreateChartUrl,
    },
    {
      title: 'Heatmap',
      url: analyticsData.heatmapUrl,
    },
  ];

  const handleDownloadCSV = () => {
    if (analyticsData.csvData) {
      const blob = new Blob([atob(analyticsData.csvData)], {
        type: 'text/csv',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${username}_videos_data.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="w-full h-screen">
      <div
        className={`flex flex-row w-full h-5/6 transition-opacity duration-1000 ${
          showChart ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Carousel>
          {chartData.map((chart, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full h-full py-4"
            >
              <p className="text-2xl font-semibold text-prim-1">
                {chart.title}
              </p>
              <div className="relative w-full h-screen">
                <Image
                  src={chart.url}
                  alt={chart.title}
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </Carousel>

        <div className="relative flex flex-col items-center justify-start w-1/3 p-4 border bg-prim-1 rounded-r-xl">
          <div
            className="absolute p-2 rounded-full top-4 right-4 hover:bg-gray-100 hover:bg-opacity-30 hover:cursor-pointer"
            onClick={handleClose}
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col items-center w-full gap-2 pb-4">
            <div className="relative w-24 h-24">
              <Image
                src={
                  analyticsData?.userInfo?.user?.avatarThumb ||
                  analyticsData?.userInfo?.user?.avatarMedium ||
                  analyticsData?.userInfo?.user?.avatarLarger
                }
                alt="User avatar"
                className="border-2 border-white rounded-full"
                fill
                objectFit="contain"
              />
            </div>
            <a
              className="text-xl font-bold text-center text-white hover:underline"
              href={`https://www.tiktok.com/@${username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {analyticsData.username || 'User'}
            </a>
            <div className="flex gap-2 font-semibold">
              <span className="text-center text-white text-md">
                {formatLargeNumber(
                  analyticsData?.userInfo?.stats?.followerCount
                ) || 0}{' '}
                Followers
              </span>
              <span className="text-center text-white text-md">
                {formatLargeNumber(
                  analyticsData?.userInfo?.stats?.followingCount
                ) || 0}{' '}
                Following
              </span>
              <span className="text-center text-white text-md">
                {formatLargeNumber(
                  analyticsData?.userInfo?.stats?.heartCount
                ) || 0}{' '}
                Likes
              </span>
            </div>

            <p className="w-full text-lg font-semibold text-center text-white">
              Total videos: {analyticsData.rowCount}
            </p>
          </div>

          <div className="flex flex-col items-start justify-between w-full h-full gap-8 py-4 border-t">
            <div className="flex flex-col gap-2 text-white">
              <span>
                <p className="text-lg font-semibold text-white">
                  Mean of View:
                </p>{' '}
                {analyticsData.mean}
              </span>
              <span>
                <p className="text-lg font-semibold text-white">
                  Median of View:
                </p>{' '}
                {analyticsData.median}
              </span>
              <span>
                <p className="text-lg font-semibold text-white">
                  Mode of View:
                </p>{' '}
                {analyticsData.mode}
              </span>
              <span>
                <p className="text-lg font-semibold text-white">
                  Standard deviation of View:
                </p>{' '}
                {analyticsData.standardDeviation}
              </span>
            </div>

            <div className="flex flex-col w-full gap-2">
              <Button
                handleClick={handleDownloadCSV}
                className="bg-white hover:bg-slate-200 text-prim-1"
              >
                <DocumentArrowDownIcon className="w-6 h-6 text-prim-1" />
                <p className="text-prim-1">Download dataset</p>
              </Button>
              <Button
                className="bg-white hover:bg-slate-300 text-prim-1"
                handleClick={() => alert('Not implemented')}
              >
                <LightBulbIcon className="w-6 h-6 text-prim-1" />
                <p className="text-prim-1">Generate insights</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCarouselChart;
