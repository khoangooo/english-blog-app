import { useState, useRef, useCallback, useEffect } from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));

function ListItems() {
  const ARR = [...Array(1500).keys()].map((x) => ++x);
  const classes = useStyles();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [data, setData] = useState([]);
  const observer = useRef();
  const perPage = 20;

  useEffect(() => {
    const arrLength = ARR.length;
    const newData = [...data];
    if (currentIdx <= arrLength - perPage) {
      newData.push(...ARR.slice(currentIdx, currentIdx + perPage));
    }
    if (arrLength - perPage < currentIdx && currentIdx <= arrLength) {
      newData.push(...ARR.slice(currentIdx, arrLength + 1));
    }
    setData(newData);
  }, [currentIdx]);

  const lastElementRef = useCallback(
    (node) => {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (currentIdx <= ARR.length - perPage) {
            setCurrentIdx((prevIndex) => prevIndex + perPage);
          }
          if (ARR.length - perPage < currentIdx && currentIdx <= ARR.length) {
            setCurrentIdx(ARR.length);
          }
        }
      });
      if (node) {
        observer.current.observe(node);
      }
      return () => {
        if (observer.current) {
          console.log("-----DISCONNECTING OBSERVER------");
          observer.current.disconnect();
        }
      };
    },
    [currentIdx, ARR.length]
  );

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {data.map((value, index) => {
            if (data.length === index + 1) {
              return (
                <Grid ref={lastElementRef} key={value} item>
                  <Item id={value} />
                </Grid>
              );
            } else {
              return (
                <Grid key={value} item>
                  <Item id={value} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ListItems;
