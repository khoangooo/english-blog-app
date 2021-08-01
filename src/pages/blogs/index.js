import React from "react";
import { makeStyles, CssBaseline, Typography, Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  h2: {
    textAlign: "center",
  },
});

export default function Detail() {
  const location = useLocation();
  const { state } = location;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container fixed className={[classes.root, "main"]}>
        <Typography variant="h2" gutterBottom className={classes.h2}>
          {ReactHtmlParser(state.title)}
        </Typography>
        <Typography component="div" style={{ backgroundColor: "#cfe8fc" }}>
          {ReactHtmlParser(state.detail)}
        </Typography>
      </Container>
    </div>
  );
}
