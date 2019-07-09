import React, { Component } from "react";
import axios from "axios";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };
  componentDidMount() {
    console.log(3);
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    console.log(123);

    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };

  render() {
    console.log(this.state);
    return (
      <div className='images'>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
