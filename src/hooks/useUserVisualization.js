import { useState, useEffect } from 'react';

const useUserVisualization = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/userVideosAnalytics?user_name=' + username
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
  }, [username]);

  return { data, loading, error };
};

export default useUserVisualization;
