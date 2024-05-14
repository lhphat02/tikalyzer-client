import { useState, useEffect } from 'react';

const usePredictResult = ({ videoUrl }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoUrl) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/predictedViewCount?video_url=' + videoUrl
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [videoUrl]);

  return { data, loading, error };
};

export default usePredictResult;
