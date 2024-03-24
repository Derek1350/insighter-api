import React, { useState, useEffect } from 'react';
import twitterClient from './twitterClient.js';

function XTrending() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchTrendingTopics() {
      try {
        const response = await twitterClient.get('trends/place', { id: 1 }); // Use WOEID for your region
        setTrends(response[0].trends);
      } catch (error) {
        console.error('Error fetching trending topics:', error);
      }
    }
    fetchTrendingTopics();
  }, []);

  return (
    <div>
      <h2>Trending Topics</h2>
      <ul>
        {trends.map((trend) => (
          <li key={trend.name}>{trend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default XTrending;
