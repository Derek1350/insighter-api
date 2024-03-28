import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const XTrending = () => {
    return (
        <>
            <div>XTrendingz</div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ChittanshuSingh"
                options={{ height: 400 }}
            />
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterShareButton
                url={'https://facebook.com/ChittanshuSingh'}
                options={{ text: '#reactjs is awesome', via: 'ChittanshuSingh' }}
            />
            <TwitterMentionButton
                screenName={'ChittanshuSingh'}
            />
            <TwitterHashtagButton
                tag={'cybersecurity'}
            />
            <TwitterFollowButton
                screenName={'ChittanshuSingh'}
            />
            <TwitterMomentShare
                momentId={'650667182356082688'}
            />
            <TwitterDMButton
                id={1364031673}
            />
            <TwitterVideoEmbed
                id={'560070183650213889'}
            />
            <TwitterOnAirButton
                id={'560070183650213889'}
            />
        </>
    )
}

export default XTrending