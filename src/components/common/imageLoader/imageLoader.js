import React, { Component } from "react";
import SvgIcon from "../svg-icon/svg-icon";
import { Spin } from "antd";

class ImageLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      errored: false,
      loading: true,
    };
  }

  onError = (e) => {
    if (!this.state.errored) {
      this.setState({
        errored: true,
        loading: false,
      });
    }
    e.target.parentNode.classList.add("image-less");
  };

  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  componentDidUpdate(prevProps) {
    const { src } = this.props;
    if (prevProps.src !== src) {
      this.setState({ errored: false, src: src, loading: true });
    }
  }

  render() {
    const { src, errored } = this.state;

    return (
      <Spin spinning={this.state.loading}>
        {!errored && (
          <img
            // style={{ visibility: errored ? 'hidden' : 'visible' }}
            src={src}
            onError={(e) => {
              this.onError(e);
            }}
            {...this.props}
            alt={this.props.alt}
            onLoad={this.handleImageLoaded}
          />
        )}
        {errored && (
          <div className="no-img">
            <div>
              <SvgIcon
                name="no-image"
                fill="#cccccc"
                viewbox="0 0 220 171.11"
              />
              <span>No Image Available</span>
            </div>
          </div>
        )}
      </Spin>
    );
  }
}

export default ImageLoader;
