export const textLimiter = (text, limit = 30) => {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
};

export const formatLargeNumber = (number) => {
  const thresholds = [
    { value: 1e9, suffix: 'B' },
    { value: 1e6, suffix: 'M' },
    { value: 1e3, suffix: 'K' },
  ];

  for (let { value, suffix } of thresholds) {
    if (Math.abs(number) >= value) {
      return (number / value).toFixed(1) + suffix;
    }
  }

  return number.toString();
};
