import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formGridItem: {
    margin: "2.5em",
  },
  logoContainer: {
    padding: 0,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  subtitle: {
    color: theme.palette.common.black,
  },
  button: {
    ...theme.typography.buttons,
    fontFamily: "Orbitron",
    padding: "1.5em",
    fontSize: "1.5em",
    background: theme.palette.primary.mainGradient,
    border: "2px solid pink",
    "&:hover": {
      background: theme.palette.secondary.mainGradient,
    },
  },
  explanation: {
    background: "white",
    border: "1px solid purple",
    padding: "1em",
  },
  image: {
    padding: "20px",
    border: "1px solid pink",
    background: theme.palette.secondary.mainGradient,
    maxWidth: "1000px",
    maxHeight: "700px",
  },
}));

const PictureInfo = (props) => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const newDate = moment(props.date).format("dddd, MMMM Do YYYY");
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className={classes.formGridItem}>
          <Typography variant="h2">Date: {newDate}</Typography>
        </Grid>
        <Grid item className={classes.formGridItem}>
          <Typography variant="h2">Title of Photo: {props.title}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.formGridItem}>
          <img className={classes.image} alt="pictures" src={props.image}></img>
        </Grid>
        <Grid item className={classes.formGridItem} align="center">
          <Button
            className={classes.button}
            variant="contained"
            onClick={toggle}
          >
            Click here for more info about this picture!
          </Button>
        </Grid>
        <Modal isOpen={modal} toggle={toggle} style={{ marginTop: "10rem" }}>
          <ModalHeader
            toggle={toggle}
            style={{
              background: "linear-gradient(to right, lightblue, pink)",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Explanation of: {props.title}
          </ModalHeader>
          <ModalBody
            style={{
              padding: "15px",
              border: "1px solid pink",
              background: "linear-gradient(to right, lightblue, pink)",
            }}
          >
            <Typography variant="subtitle2" className={classes.explanation}>
              {props.explanation}
            </Typography>
          </ModalBody>
        </Modal>

        <Typography
          variant="subtitle2"
          style={{ fontSize: "1.3rem", color: "black" }}
        >
          &copy;2020 Charlene Johnson
        </Typography>
      </Grid>
    </>
  );
};

export default PictureInfo;
