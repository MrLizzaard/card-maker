import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./maker/maker";

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
