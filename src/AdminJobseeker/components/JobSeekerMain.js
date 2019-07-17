import React, { Component } from "react";
import { withRouter, browserHistory } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./style.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import jsonData from "../jsonData";
import { SwipeableViews } from "react-swipeable-views";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import JobSeekerList from "./JobSeekerList";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import EditableTable from "./EditableTable/EditableTable";
import { BrowserRouter, NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

//Style for selected and unselected button
const selectedButtton = {
  background: "linear-gradient(105deg, #f0582b, #ec0586)",
  color: "#ffffff",
  fontWeight: 500
};

const unSelectedButton = {
  color: "#e73a9e"
};

//for displaying number of rows in a single page
const rowsPerPage = 5;
const page = 1;
const setRowsPerPage = 5;

class JobSeekerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currently_opened_tab: "pending",
      setPage: 0,
      showEditable: false,

      //setRowsPerPage:5,
      count: {
        pending_count: 5,
        approved_count: 5,
        rejected_count: 6
      }
    };
  }

  //function to change jobseeker status
  changeJobSeekerList = currentStage => {
    this.setState({
      currently_opened_tab: currentStage
    });
  };
  //delete a row
  removeJobSeekerList = index => {
    jsonData.splice(index, 1);
    this.setState({
      jsonData: jsonData
    });
  };
  handleChangePage = (event, newPage) => {
    const { setPage } = this.state;
    this.setState({
      setPage: setPage + 5
    });
    console.log("setPage", setPage);
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      setRowsPerPage: +event.target.value,
      setPage: 0
    });
  };
  handleClick = (event, name) => {
    alert("Hello");
  };
  //on click of radio button
  handleChange = (event, type) => {
    this.setState({
      [type]: event.target.value == "yes" ? true : false,
      value: event.target.value
    });
  };
  render() {
    const { currently_opened_tab, currentStage, count, selected } = this.state;
    const { type } = this.props;
    // {
    //   console.log("props", this.props);
    // }
    //function to navigate to editable table
    function handleNavigationClick(e) {
      debugger;
      this.props.history.push("/editable");
      console.log("here");
    }
    return (
      <div>
        <div className="jobseeker-edit">
          <div className="edit-navigation">All Job Seeker Profiles</div>
        </div>
        <div className="profile-navigation">
          <Breadcrumbs aria-label="Breadcrumb">
            <Link
              color="inherit"
              href="/"
              //onClick={this.handleClick}
            >
              User Account
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              //onClick={this.handleClick}
            >
              Job Seeker Profiles
            </Link>
            <Link
              style={{ color: "#e73a9e" }}
              href="/components/breadcrumbs/"
              //onClick={this.handleClick}
              aria-current="page"
            >
              All
            </Link>
            <Link
              style={{ color: "#e73a9e" }}
              href="#"
              onClick={this.handleNavigationClick}
              aria-current="page"
            >
              Editable Example
            </Link>
            {/* <NavLink to="/editable" className="link">
              Editable Example
            </NavLink> */}
          </Breadcrumbs>
        </div>
        <div className="main-container">
          <div className="text-tab">
            <div className="main-text">List of JobSeeker</div>
            <div className="job-seeker-buttons">
              <div
                className="job-seeker-pending-button"
                style={
                  currently_opened_tab == "pending"
                    ? selectedButtton
                    : unSelectedButton
                }
              >
                <div
                  className="job-seeker-pending-text"
                  onClick={() => this.changeJobSeekerList("pending")}
                >
                  Pending(
                  {count.pending_count}){" "}
                </div>
              </div>
              <div
                className="job-seeker-approved-button"
                style={
                  currently_opened_tab == "approved"
                    ? selectedButtton
                    : unSelectedButton
                }
              >
                <div
                  className="job-seeker-approved-text"
                  onClick={() => this.changeJobSeekerList("approved")}
                >
                  Approved(
                  {count.approved_count})
                </div>
              </div>
              <div
                className="job-seeker-rejected-button"
                style={
                  currently_opened_tab == "rejected"
                    ? selectedButtton
                    : unSelectedButton
                }
              >
                <div
                  className="job-seeker-rejected-text"
                  onClick={() => this.changeJobSeekerList("rejected")}
                >
                  Rejected(
                  {count.rejected_count})
                </div>
              </div>
            </div>
          </div>
          <div className="hr-line" />
          <div className="list-of-job-seeker">
            <div className="job-seeker-body">
              <div className="job-seeker-wrapper">
                <table
                  style={{
                    tableLayout: "fixed"
                  }}
                  width="100%"
                >
                  <tr className="label-styles-L">
                    <th className={"td-padding-20px"}>Sr no</th>
                    <th className={"td-padding-20px"}>Date</th>
                    <th className={"td-padding-20px"}>Email id</th>
                    <th className={"td-padding-20px"}>Reason</th>
                    {currently_opened_tab !== "pending" ? (
                      <th className={"td-padding-20px"}>Comment</th>
                    ) : null}
                    <th className={"td-padding-20px"}>Actions</th>
                  </tr>
                </table>
              </div>
            </div>
            {console.log("hint", currently_opened_tab)}
          </div>
          {jsonData.map((result, key) => (
            <JobSeekerList
              key={result.id}
              result={result}
              type={currently_opened_tab}
              removeJobSeekerList={() => this.removeJobSeekerList(key)}
            />
          ))}
          {/* Radio group example */}
          <div>
            <div className="yes-no">
              <FormControl
                component="fieldset"
                className="radio-button-control"
              >
                Show Editable Example
                <RadioGroup
                  id="showEditable"
                  className="search-radio-buttons"
                  //value={type == "yes" ? "yes" : "no"}
                  onChange={e => this.handleChange(e, "showEditable")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            {this.state.showEditable && <EditableTable />}
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={jsonData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </div>
      </div>
    );
  }
}

//export default withStyles(useStyles)(JobSeekerMain);
export default JobSeekerMain;
