import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    width: 250,
    wordWrap: "break-word",
  },
  text: {
    textDecoration: "none",
    color: "#000",
  },
  title: {
    height: 65,
    overflow: "hidden",
  },
  btn: {
    "&:hover": {
      backgroundColor: "#17A974",
    },
  },
  activeBtn: {
    backgroundColor: "#17A974",
    "&:hover": {
      backgroundColor: "#17A974",
    },
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Item(props) {
  const { item } = props;
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const copyUrl = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleCopy = () => {
    copyUrl();
    setIsClicked(true);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Copied
        </Alert>
      </Snackbar>
      <Card className={classes.root}>
        <Link className={classes.text} to={{ pathname: `/blog-detail/${item.slug}`, state: item }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              src="https://dangkyduhoc.vn/wp-content/uploads/2021/04/52351011-english-british-england-language-education-concept.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            className={isClicked ? classes.activeBtn : classes.btn}
            variant="contained"
            color="primary"
            size="small"
            fullWidth
            onClick={handleCopy}
          >
            {copied ? "Copied" : "Copy URL"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Item;
