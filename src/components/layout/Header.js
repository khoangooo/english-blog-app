import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    cursor: "pointer",
  },
}));

function Header() {
  const classes = useStyles();
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const history = useHistory();

  const handleCloseDrawer = (isClosed) => () => {
    setIsDrawerOpened(isClosed);
  };

  const handleGotoHomepage = () => history.push("/");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsDrawerOpened(!isDrawerOpened)}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <div onClick={handleGotoHomepage}>Menu</div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={isDrawerOpened} onClose={handleCloseDrawer} />
    </div>
  );
}

export default withRouter(Header);
