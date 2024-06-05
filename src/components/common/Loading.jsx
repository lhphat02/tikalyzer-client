import ProgressiveLoading from './ProgressiveLoading';

const Loading = ({ statusMessage, interval }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 space-y-5 animate-pulse">
      <div className="loader"></div>
      <p className="text-xl font-medium text-center text-prim-2">
        <ProgressiveLoading texts={statusMessage} interval={interval} />
      </p>
    </div>
  );
};

export default Loading;
