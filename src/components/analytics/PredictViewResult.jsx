import React from 'react';
import Loading from '../common/Loading';
import Image from 'next/image';
import usePredictResult from '@/hooks/usePredictResult';

const PredictViewResult = ({ videoUrl }) => {
  const { data, loading, error } = usePredictResult({ videoUrl });

  if (loading) {
    return <Loading statusMessage="Training Random Forest model..." />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="flex w-full justify-center items-end gap-4">
      <p className=" text-xl text-prim-3 font-semibold text-center">
        Predicted view count:
      </p>
      <p className=" text-2xl text-prim-1 font-bold text-center">
        [{data.data}]
      </p>
      <p className=" text-xl text-prim-3 font-semibold text-center">views</p>
    </div>
  );
};

export default PredictViewResult;
