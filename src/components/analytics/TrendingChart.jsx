import React from 'react';
import Loading from '../common/Loading';
import Image from 'next/image';
import useTrendingVisualization from '@/hooks/useTrendingVisualization';

const TrendingChart = () => {
  const { data, loading, error } = useTrendingVisualization();

  if (loading) {
    return <Loading statusMessage="Loading trending video analytics..." />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let analyticsData = data.data;

  const chartData = [
    {
      title: 'Distribution of view over videos',
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

  console.log(data);

  return (
    <div className="flex w-full flex-col">
      <p className=" text-2xl text-prim-1 font-semibold text-center">
        Total videos: {analyticsData.rowCount}
      </p>

      <div className="w-full flex text-xl font-semibold justify-between p-16">
        <p>Mean: {analyticsData.mean}</p>
        <p>Median: {analyticsData.median}</p>
        <p>Mode: {analyticsData.mode}</p>
      </div>

      {chartData.map((chart, index) => (
        <div className="p-8 flex flex-col items-center justify-center border h-full">
          <p className="text-2xl font-semibold text-prim-1">{chart.title}</p>
          <div key={index} className="relative w-full h-screen">
            <Image src={chart.url} alt={chart.title} fill objectFit="contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingChart;
