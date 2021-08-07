import React, { Component } from "react";
import { fire } from "../public/firebase";

class App extends Component {
  constructor() {
    super();
    fire();
  }
  render() {
    return <div></div>;
  }
}

export default App;
