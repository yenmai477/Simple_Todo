import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
// import Footer from "../Footer/Footer";

export default class List extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.data.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={this.props.onDeleteItem}
            />
          ))}
        </ul>
        {/* <Footer>
          Please add more for me! <span>helo</span>
        </Footer> */}
      </React.Fragment>
    );
  }
}

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
