import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter, browserHistory } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import EditableTable from "./AdminJobseeker/components/EditableTable/EditableTable";
//import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import JobSeekerMain from "./AdminJobseeker/components/JobSeekerMain";

export class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/editable" render={() => <EditableTable />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
