// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class SideBar extends Component {
//   render() {
//     return <>This is side bar</>;
//   }
// }

// export default SideBar;

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import JobSeekerMain from "./JobSeekerMain";
import SvgIcon from "@material-ui/core/SvgIcon";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import EditableTable from "./EditableTable/EditableTable";
import jsonData from "../jsonData";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SideBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const selected = 1;

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Home", "User Account", "Company", "Home", "Invoice"].map(
          (text, index) => (
            <ListItem button key={text}>
              <div className={index === 1 ? "selected" : null}>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </div>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="job-seeker-responsive-wrapper">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} />
        <nav className={classes.drawer} aria-label="Mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className="jobseeker-box">
          <JobSeekerMain />
          {/* <EditableTable /> */}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
SideBar.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
