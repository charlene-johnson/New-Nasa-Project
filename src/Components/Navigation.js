import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Calendar from "./Calendar";
import { Modal, ModalBody } from "reactstrap";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import theme from "../ui/Theme";

import logo from "../images/nasa-logo.png";


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
    marginLeft: "0.2em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "50px",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 10,
  },
}));

export default function Navigation(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          style={{
            
            borderBottom: "2px solid black",
          }}
        >
          <Toolbar disableGutters>
            <img src={logo} alt="nasa logo" className={classes.logo} />
            <Typography variant="h1" style={{ textAlign: "center" }}>
              Nasa<br></br> Photos
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                label="Select a Date"
                onClick={toggle}
              />
              <Modal isOpen={modal} toggle={toggle}style={{zIndex: 1500}}>
                <ModalBody
                  style={{
                    padding: "20px",
                    border: "1px solid pink",
                    background: "linear-gradient(to right, lightblue, pink)",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 1500
                  }}
                >
                  <Calendar date={props.date} setDate={props.setDate}  style={{zIndex: 1500}}/>
                </ModalBody>
              </Modal>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
