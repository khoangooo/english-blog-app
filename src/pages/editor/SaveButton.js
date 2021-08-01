import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
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

function IconLabelButtons(props) {
	const {data} = props
  const classes = useStyles();

  const handleSavePost = async () => {
    const res = await blogsApi.createBlog(data)
    console.log(res)
  }

  return (
    <div className={classes.wrapperBtn}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        endIcon={<SaveIcon />}
				onClick={handleSavePost}
      >
        Save
      </Button>
    </div>
  );
}
export default IconLabelButtons