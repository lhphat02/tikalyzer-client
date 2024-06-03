import { useState, useEffect, useRef } from 'react';

const useUserVisualization = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!username || isMounted.current) return;

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
    isMounted.current = true;
  }, [username]);

  return { data, loading, error };
};

export default useUserVisualization;
