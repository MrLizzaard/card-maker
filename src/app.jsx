import React from "react";
import Login from "./components/login";

const App = (props) => {
  return <Login authService={props.authService} />;
};

export default App;
