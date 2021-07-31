import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  render() {
    const length = this.props.data ? this.props.data.length : 0;
    return (
      <div className="footer">
        {!!length && `${length} items`}
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Footer.propTypes = {
  data: PropTypes.array,
};
