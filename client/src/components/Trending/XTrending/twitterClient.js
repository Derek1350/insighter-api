import Twitter from 'twitter-lite';

const twitterClient = new Twitter({
  consumer_key: "ooAptfoIMUPZbWfUyx5fHA2dP",
  consumer_secret: "6Jl3QU1dBc7TjynDK8Ls8NAZyzNbh6JbKmunoTx39YG2P0LFDe",
  access_token_key: "1413732965280927745-M4MDyy0wFWGorEuPPgpqLFVog4gnFW",
  access_token_secret: "MKhdCEuZHrzcAPPoOzNzHuSNMpZBBvH3RwpOYFVnIGoqh",
});

export default twitterClient;

// consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,