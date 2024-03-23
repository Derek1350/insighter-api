import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './youtube-trending.css';

const YouTubeTrending = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [category, setCategory] = useState('0');

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos',
          {
            params: {
              part: 'snippet,statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 15,
              key: 'AIzaSyDXYy_71EbmFkf5sxor-mYQ0C3gGxc2O_A',
              videoCategoryId: category,
            },
          }
        );
        setTrendingVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching trending videos:', error);
      }
    };

    fetchTrendingVideos();
  }, [category]);

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div>
      {/* <h1>Trending YouTube Videos</h1> */}
      {/* <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="0">All</option>
          <option value="10">Music</option>
          <option value="20">Gaming</option>
        </select>
      </div> */}
      <div>
        <span>All</span>
        <span>Music</span>
        <span>Gaming</span>
      </div>
      <div></div>
      <hr />
      <div className="trending-yt-videos" style={{}}>
        {trendingVideos.map((video) => (
          <div key={video.id} className="" style={{background: "linear-gradient(to right, #141e30, #0f121a)", borderRadius: "20px"}}>
            <div className='trending-yt-video glass' style={{}}>
                <YouTube videoId={video.id} opts={{}} />
                <div>
                    <h2 style={{margin: "0"}}>{video.snippet.title}</h2>
                    <p>Channel: {video.snippet.channelTitle}</p>
                    <p>Views: {video.statistics.viewCount}</p>
                    <p>Likes: {video.statistics.likeCount}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeTrending;
