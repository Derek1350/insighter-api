import React from 'react';
import twitterTrends from '../../../constants/twitterTrends.json';
import { Link } from 'react-router-dom';

const XTrending = () => {
  return (
    <>
      {twitterTrends.trends.map((trend, index) => (
        <div className='glass' style={{padding: "10px 15px", borderRadius: "30px", fontSize: "15px"}} key={index}>
            <Link to={trend.url}>
                <div>
                    <h3>{trend.name}</h3>
                    <p>Tweet Volume: {trend.tweet_volume}</p>
                </div>
            </Link>
        </div>
      ))}
    </>
  );
}

export default XTrending;
