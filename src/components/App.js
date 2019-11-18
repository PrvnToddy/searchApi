import React from "react";
import axios from "axios";
import Search from "./Search";
import SearchList from "./SearchList";

class App extends React.Component {
  state = { images: [] };
  inputQuery = async team => {
    let response = await axios.get("https://api.unsplash.com//search/photos", {
      params: { query: team },
      headers: {
        Authorization:
          "Client-ID 91f20cfe6f6bfad6c9fd3dd130ce5c39c4bfc6df29cc20e9d5f51db07c8ba701"
      }
    });
    console.log(team);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <Search Submit={this.inputQuery} />
        Found Images : {this.state.images.length}
        <SearchList images={this.state.images} />
      </div>
    );
  }
}
export default App;
