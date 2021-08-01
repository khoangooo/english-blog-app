import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 100,
    backgroundColor: "#231c42",
    color: "#fff",
    // position: "relative",
    // left: 0,
    // bottom: 0,
    // width: "100%",
  },
  footerContent: {
    maxWidth: 800,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignTtems: "center",
  },
  footerForm: {
    color: "#fff",
    maxWidth: 300,
    padding: 40,
    width: "100%",
    marginTop: -40,
    marginBottom: 40,
    background: "#3276b1",
    borderRadius: 5,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container fixed>
        <div className={classes.footerContent}>
          <form className={classes.footerForm}>
            <h2>Join the Newsletter</h2>
            <p>First Name</p>
            <input type="text" required="" />
            <p>Last Name</p>
            <input type="text" required="" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
