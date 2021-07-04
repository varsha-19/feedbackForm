import React from "react";
import FeedCard from "./FeedCard";


const FeedList = (props) => {
    console.log(props);

    const deleteFeedHandler = (id) => {
        props.getFeedId(id);
      };

    const renderFeedList = props.feeds.map((feed) => {
            return (
              <FeedCard
                feed={feed}
                clickHander={deleteFeedHandler}
                key={feed.id}
              />
            );  
});
return (
    <div className="ui celled list">
        {renderFeedList}
    </div>
)};
export default FeedList;