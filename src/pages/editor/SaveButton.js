import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
	wrapperBtn: {
		display: "flex",
		justifyContent: "flex-end",
	},
  button: {
    marginTop: theme.spacing(1),
  },
}));

function IconLabelButtons(props) {
	const {data} = props
  const classes = useStyles();

  return (
    <div className={classes.wrapperBtn}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        endIcon={<SaveIcon />}
				onClick={() => console.log(data)}
      >
        Save
      </Button>
    </div>
  );
}
export default IconLabelButtons