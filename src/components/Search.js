import React from "react";

class Search extends React.Component {
  state = {
    query: ""
  };
  inputSubmit = e => {
    e.preventDefault();
    // console.log(this.state.query);
    this.props.Submit(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.inputSubmit} className="ui form">
        <div className="field">
          <label>User Input</label>
          <input
            type="text"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default Search;
