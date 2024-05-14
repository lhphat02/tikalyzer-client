import { useState, useEffect } from 'react';

const useHashtagVisualization = ({ hashtag }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!hashtag) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/hashtagVideosAnalytics?hashtag=' + hashtag
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
  }, [hashtag]);

  return { data, loading, error };
};

export default useHashtagVisualization;
