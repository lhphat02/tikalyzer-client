const Loading = ({ statusMessage = 'Loading' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 space-y-5">
      <div className="loader"></div>
      <p className="text-xl font-medium text-center text-prim-2">
        {statusMessage}
      </p>
    </div>
  );
};

export default Loading;
