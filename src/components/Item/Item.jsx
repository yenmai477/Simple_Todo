import React, { Component } from "react";

export default class Item extends Component {
  state = {
    isHighlight: false,
  };

  componentDidMount() {
    console.log("Hello I'm here!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I'm updated!");
  }

  componentWillUnmount() {
    console.log("Bye Bye");
  }

  render() {
    console.log("I'm rendering!");
    const { isHighlight } = this.state;
    const { id, title } = this.props.item;
    return (
      <h4>
        <p
          style={
            isHighlight
              ? { color: "yellow", cursor: "pointer" }
              : { cursor: "pointer" }
          }
        >
          {title}
        </p>
        <button
          onClick={() =>
            this.setState({ isHighlight: !this.state.isHighlight })
          }
        >
          Highlight
        </button>

        <button onClick={() => this.props.onDeleteItem(id)}>x</button>
      </h4>
    );
  }
}
