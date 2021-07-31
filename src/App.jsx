import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

import "./App.css";
// TODO: 07/31/21  Save data in todos to LocalStorage và load it when mouting App
/**
 * Tìm hiểu cách lưu dữ liệu vào trong LocalStorage
 * Xác định xem lưu nó ở Component nào và lưu vào lúc nào
 * Load dữ liệu từ LocalStorage lên tại componentDidMount => set lại state todo
 */
// TODO: 07/31/21 Handle update status of item: when click the title of item, update it to completed or not
// FIXME: 07/31/21  Update Item to inline

export default class App extends Component {
  state = {
    input: "",
    todos: [],
  };
  handleOnChange = (evt) => {
    const { value } = evt.target;
    this.setState({ input: value });
  };

  handleOnKeyPress = (evt) => {
    if (evt.key === "Enter") {
      let { input, todos } = this.state;
      const newTodo = { id: uuidv4(), title: input, completed: false };
      todos = [...todos, newTodo];
      this.setState({ input: "", todos });
    }
  };

  handleOnDeleteItem = (id) => {
    console.log(`delete item ${id}`);
    const newTodos = this.state.todos.filter((item, idx) => {
      return item.id !== id;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, input } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: "rgba(175, 47, 47, 0.15)" }}>Todos</h1>
        </header>
        <main>
          <div>
            <input
              className="new-todo"
              type="text"
              value={input}
              name="input"
              onChange={this.handleOnChange}
              onKeyPress={this.handleOnKeyPress}
              placeholder="What needs to be done?"
            />
            <List data={todos} onDeleteItem={this.handleOnDeleteItem} />
          </div>
          <Footer data={todos}>
            <p style={{ color: "tomato", fontWeight: "bold" }}>
              Build from React with love!
            </p>
          </Footer>
        </main>
      </div>
    );
  }
}
