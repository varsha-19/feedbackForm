import React from "react";

const FeedCard = (props) => {
  const { id, firstname, middlename, lastname, feedback } = props.feed;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{firstname} {middlename} {lastname}</div>
        <div>{feedback}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};
export default FeedCard;