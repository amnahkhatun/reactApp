import React, { Component } from "react";
import jsonData from "../jsonData";
import style from "./style.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

const serial_number = [];
let count = 0;
for (let i = 1; i <= jsonData.length; i++) {
  //experiences_year.push(i.toString());

  count++;
}
{
  console.log("serial", count);
}
class JobSeekerList extends Component {
  render() {
    const { type } = this.props;

    return (
      <div className="list-of-job-seeker">
        <div className="job-seeker-body">
          <div className="job-seeker-wrapper">
            <table style={{ tableLayout: "fixed" }} width="100%">
              <tr className="value-styles-L">
                <td className={"td-padding-20px"}>{this.props.result.id} </td>
                <td className={"td-padding-20px"}>{this.props.result.date}</td>
                <td className={"td-padding-20px"}>{this.props.result.email}</td>
                <td className={"td-padding-20px"}>
                  {this.props.result.reason}
                </td>
                {type !== "pending" ? (
                  <td className={"td-padding-20px"}>
                    {this.props.result.comment}
                  </td>
                ) : null}
                {type === "pending" ? (
                  <td className={"td-padding-20px"}>
                    {/* checkbox */}
                    <FormControlLabel
                      control={<Checkbox checked={this.props.result.checked} />}
                    />
                    {/* delete */}
                    <FormControl
                      style={{ marginLeft: "11px", marginTop: "-9px" }}
                      className="shape-minus"
                    >
                      <div
                        className="shape"
                        onClick={this.props.removeJobSeekerList}
                      >
                        <div className="minus">-</div>
                      </div>
                    </FormControl>
                  </td>
                ) : null}
                {type === "approved" ? (
                  <td className={"td-padding-20px"}>
                    <FormControl
                      style={{ marginLeft: "11px", marginTop: "-20px" }}
                      className="shape-minus"
                    >
                      <div
                        className="shape"
                        onClick={this.props.removeJobSeekerList}
                      >
                        <div className="minus">-</div>
                      </div>
                    </FormControl>
                  </td>
                ) : null}
                {type === "rejected" ? (
                  <td className={"td-padding-20px"}>
                    <FormControlLabel
                      control={<Checkbox checked={this.props.result.checked} />}
                    />
                  </td>
                ) : null}
              </tr>
            </table>
            <div className="hr-line" />
          </div>
        </div>
      </div>
    );
  }
}
export default JobSeekerList;
