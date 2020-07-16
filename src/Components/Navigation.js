import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Calendar from "./Calendar";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

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
  logo: {
    height: "8em",
    marginLeft: "0.2em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "50px",
    opacity: 1,
    "&:hover": {
      color: theme.palette.common.purple,
      textDecoration: "none",
    },
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  const toggle = () => setModal(!modal);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const refreshPage = () => {
    window.location.reload(true);
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
          position="relative"
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
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                onClick={refreshPage}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                label="Select a Date"
                onClick={toggle}
              />
              <Modal
                isOpen={modal}
                toggle={toggle}
                style={{ marginTop: "10rem" }}
              >
                <ModalHeader
                  toggle={toggle}
                  style={{
                    background: "linear-gradient(to right, lightBlue, pink",
                  }}
                ></ModalHeader>
                <ModalBody
                  style={{
                    padding: "20px",
                    border: "1px solid pink",
                    background: "linear-gradient(to right, lightblue, pink)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Calendar date={props.date} setDate={props.setDate} />
                </ModalBody>
              </Modal>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
