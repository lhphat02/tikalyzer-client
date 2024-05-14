import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Loading from './Loading';
import assets from '@/assets';

const Chart = () => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:5000/userVideosAnalytics?user_name=sofm_official'
        );
        setImageData(response.data.data.displotUrl);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="flex justify-center w-full item-center">
      {imageData ? (
        <div className="relative w-full h-96">
          <Image
            src={imageData}
            alt="Chart"
            fill
            objectFit="contain"
            loading="lazy"
          />
        </div>
      ) : (
        <Loading statusMessage="Loading... Please wait" />
      )}
    </div>
  );
};

export default Chart;
