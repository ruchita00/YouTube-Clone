const GOOGLE_API_KEY = "AIzaSyB0MbfAEI-VFWDLM2ZzU9wYtIwZrsoJzlg";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination

export const SUBSCRIPTION_API =
  "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
  GOOGLE_API_KEY;
