import React, { useState } from "react";
import { Button, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@material-ui/icons/Save";
import blogsApi from "../../api/apiBlogs";

const useStyles = makeStyles((theme) => ({
  wrapperBtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function IconLabelButtons(props) {
  const { data } = props;
  const classes = useStyles();
  const [alert, setAlert] = useState({
    isOpened: false,
    msg: "",
    type: "",
  });

  const handleSavePost = async () => {
    const { status, message } = await blogsApi.createBlog(data);
    let msg = status ? message : "Save successfully";
    let type = status ? "success" : "error";
    setAlert({ ...alert, isOpened: true, msg, type });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ ...alert, isOpened: false });
    setTimeout(() => setAlert({ ...alert, msg: "", type: "" }), 2250);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alert.isOpened}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity={alert.type}>
          {alert.msg}
        </Alert>
      </Snackbar>
      <div className={classes.wrapperBtn}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          endIcon={<SaveIcon />}
          onClick={handleSavePost}
        >
          Publish
        </Button>
      </div>
    </>
  );
}
export default IconLabelButtons;
