import React, {useState} from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "3px solid #3f51b5",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchBar(props) {
  const classes = useStyles();
  const {setSlug} = props;
  const [searchText, setSearchText ] = useState("");

  const handleChangeSearchText = (event) => {
    setSearchText(event.target.value);
    setTimeout(() => {
      setSlug(event.target.value)
    }, 500)
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={searchText}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChangeSearchText}
      />
    </div>
  );
}

export default SearchBar;
