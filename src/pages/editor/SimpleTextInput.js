import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
}));
function SimpleTextInput(props) {
  const classes = useStyles();
  const { data, setData } = props;

  const handleChangeText = (e) => {
    setData(e.target.value);
  };

  return (
    <TextField
      id="title"
      variant="outlined"
      onChange={handleChangeText}
      value={data}
      rows={4}
      multiline
      className={classes.input}
    />
  );
}

export default SimpleTextInput;
