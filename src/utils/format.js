export const textLimiter = (text, limit = 30) => {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
};
