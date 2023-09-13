import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>

        <Route exact path="/:id">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
