import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.myRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.myRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
