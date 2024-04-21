const CONSTANTS = {
  URL: {
    BASE_URL: 'https://github.com/lhphat02/tikalyzer-client',
    CLIENT: 'http://localhost:3000/',
    SERVER: 'http://127.0.0.1:5000/',
  },
  ROUTES: {
    HOME: '/',
    ANALYZE_USER: '/analyze-user',
    ANALYZE_HASHTAG: '/analyze-hashtag',
    ANALYZE_TRENDING: '/analyze-trending',
    CONTACT: '/contact',
  },
  API_ENDPOINT: {
    USER_VIDEOS_ANALYTICS: CONSTANTS.URL.SERVER + 'userVideosAnalytics',
    HASHTAG_VIDEOS_ANALYTICS: CONSTANTS.URL.SERVER + 'hashtagVideosAnalytics',
    TRENDING_VIDEOS_ANALYTICS: CONSTANTS.URL.SERVER + 'trendingVideosAnalytics',
  },
  AXIOS: {},
  FUNCTION: {},
};

export default CONSTANTS;
