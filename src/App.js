import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./AdminJobseeker/components/SideBar";
import NavLinks from "./AdminJobseeker/components/NavLinks";
import EditableTable from "./AdminJobseeker/components/EditableTable/EditableTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Home = () => <h1>Home Component</h1>;
const About = () => <h1>About Component</h1>;
const Contact = props => (
  <div>
    {console.log(props)}
    <h1>Contact Component</h1>
    <div className="links">
      <NavLink to={`${props.match.url}/india`} className="link">
        India Office
      </NavLink>
      <NavLink to={`${props.match.url}/us`} className="link">
        Us Office
      </NavLink>
    </div>
    <Switch>
      <Route path={`${props.match.url}/india`} component={ContactIndia} />
      <Route path={`${props.match.url}/us`} component={ContactUs} />

      <Route render={() => <h2>No office found.</h2>} />
    </Switch>
  </div>
);
const ContactIndia = () => <h1>Contact India</h1>;
const ContactUs = () => <h1>Contact Us</h1>;
const Admin = () => <h1>Admin Component</h1>;
const Login = () => <h1>Login Component</h1>;

function App() {
  return (
    <>
      <div>
        {" "}
        <SideBar />
      </div>
      <div style={{ textAlign: "center" }}>
        <Router>
          <div>
            <NavLinks />
            <div className="views">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                {/* <Route path="/editable" component={EditableTable} /> */}
                <Route render={() => <h1>404 Error</h1>} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
