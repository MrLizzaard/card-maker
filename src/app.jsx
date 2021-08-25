import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ authService, FileInput, cardRepository }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
