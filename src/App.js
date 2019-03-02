import React, { Component } from "react";
import "./App.css";
import SimpleFormQA from "./form_data/simpleForm.data";
const DynamicForm = require("@chingu-labs/dynamic-forms");

class App extends Component {
  render() {
    return <DynamicForm questions={SimpleFormQA} />;
  }
}

export default App;
