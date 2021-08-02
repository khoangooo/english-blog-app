import { useState } from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  pagination: {
    marginTop: 50,
    marginBottom: 30,
  },
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

function ListItems(props) {
  const classes = useStyles();

  const { data, loading, errMessage, hasMore, pagination, setPageNumber } = props;

  const newPagination = {
    count: Math.ceil(pagination.total / pagination.per_page) || 0,
    page: pagination.page_number || 1,
  };

  const handleChangePagination = (event, value) => {
    setPageNumber(value);
  };

  return loading ? (
    <div className={classes.loadingWrapper}>
      <div className="loading"></div>
    </div>
  ) : (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {data?.map((elm) => {
            return (
              <Grid key={elm.id} item>
                <Item item={elm} />
              </Grid>
            );
          })}
        </Grid>
        {data?.length > 0 && <Grid container className={classes.pagination} justifyContent="center" spacing={6}>
          <Pagination
            {...newPagination}
            color="primary"
            size="large"
            onChange={handleChangePagination}
          />
        </Grid>}
      </Grid>
    </Grid>
  );
}

export default ListItems;
