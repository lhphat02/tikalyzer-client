import useUserVisualization from '@/hooks/useUserVisualization';
import React, { useState } from 'react';
import Loading from '../common/Loading';
import Image from 'next/image';
import Carousel from '../common/Carousel';
import {
  DocumentArrowDownIcon,
  EyeIcon,
  LightBulbIcon,
  TableCellsIcon,
} from '@heroicons/react/24/solid';
import Button from '../common/Button';
import { textLimiter } from '@/utils/format';

const UserCarouselChart = ({ username = 'mazuong2ka' }) => {
  const { data, loading, error } = useUserVisualization({ username });
  const [csvData, setCsvData] = useState(null);

  if (loading) {
    return <Loading statusMessage="Loading video analytics..." />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let analyticsData = data.data;

  const chartData = [
    {
      title: 'Distribution of View over videos',
      url: analyticsData.displotUrl,
    },
    {
      title: 'Top video screen size with most views',
      url: analyticsData.topSizePieChartUrl,
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

  console.log(data);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-row w-full h-5/6">
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
        <div className="flex flex-col items-center justify-start w-1/3 p-4 border bg-prim-1 rounded-r-xl">
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
            <p className="text-center text-white text-md">
              {textLimiter(
                analyticsData?.userMetaData?.desc || "User's description",
                100
              )}
            </p>
            <p className="w-full text-lg font-semibold text-center text-white ">
              Total videos: {analyticsData.rowCount}
            </p>
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-8 p-4 border-t">
            <div className="flex flex-col gap-2 text-white ">
              <span>
                <p className="text-lg font-semibold text-white ">
                  Mean of View:
                </p>{' '}
                {analyticsData.mean}
              </span>
              <span>
                <p className="text-lg font-semibold text-white ">
                  Median of View:
                </p>{' '}
                {analyticsData.median}
              </span>
              <span>
                <p className="text-lg font-semibold text-white ">
                  Mode of View:
                </p>{' '}
                {analyticsData.mode}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <Button handleClick={handleDownloadCSV} variant="secondary">
              <DocumentArrowDownIcon class="h-6 w-6 text-prim-1" />
              <p className="text-prim-1">Download dataset</p>
            </Button>
            <Button
              variant="secondary"
              handleClick={() => alert('Not implemented')}
            >
              <LightBulbIcon class="h-6 w-6 text-prim-1" />
              <p className="text-prim-1">Generate insights</p>
            </Button>
            <Button
              variant="secondary"
              handleClick={() => alert('Not implemented')}
            >
              <EyeIcon class="h-6 w-6 text-prim-1" />
              <p className="text-prim-1">Predict View Count</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCarouselChart;
