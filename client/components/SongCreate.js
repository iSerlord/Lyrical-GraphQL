import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    return (
      <div>
        <h3>Create new Song Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ title: event.target.value });
              console.log(this.state.title);
            }}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
