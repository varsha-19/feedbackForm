import React from "react";

class AddFeed extends React.Component {
  state = {
    firstname: "",
    middlename:"",
    lastname:"",
    feedback: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.firstname === "" || this.state.lastname === "" || this.state.feedback=== "") 
    {
      alert("ALl the fields are mandatory! expect Middle Name");
      return;
    }
    this.props.addFeedHandler(this.state);
    this.setState({ firstname: "", middlename:"",lastname:"", feedback: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Your FeedBack Matters</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Middle Name</label>
            <input
              type="text"
              name="middlename"
              placeholder="Middle Name"
              value={this.state.middlename}
              onChange={(e) => this.setState({ middlename: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Feedback</label>
            <textarea
              type="text"
              name="email"
              placeholder="write your feedback"
              value={this.state.feedback}
              onChange={(e) => this.setState({ feedback: e.target.value })}
            ></textarea>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddFeed;