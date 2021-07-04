import React,{useState, useEffect} from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddFeed from "./AddFeed";
import FeedList from "./FeedList";

function App(){
  const LOCAL_STORAGE_KEY = "feeds";
  const [feeds, setFeeds]= useState([]);

  const addFeedHandler = (feed) => {
    console.log(feed);
    setFeeds([...feeds,{ id: uuid(), ...feed }]);
  };

  const removeFeedHandler = (id) => {
    const newFeedList = feeds.filter((feed) => {
      return feed.id !== id;
    });

    setFeeds(newFeedList);
  };

  useEffect(() => {
    const retriveFeeds = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveFeeds) setFeeds(retriveFeeds);
  }, []);
useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feeds));
  }, [feeds]);

  return(
    <div className="ui container">
      <Header />
      <AddFeed addFeedHandler={addFeedHandler} />
      <FeedList feeds={feeds} getFeedId={removeFeedHandler}>FeedList</FeedList>
    </div>
  );
}
export default App;