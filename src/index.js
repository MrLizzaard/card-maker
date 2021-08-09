import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import "./index.module.css";
import App from "./app";
import AuthService from "./firebase/auth";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authServise={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
