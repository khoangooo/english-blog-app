import { useState} from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useQuery } from "../../hooks";

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

function ListItems() {
  const classes = useStyles();
  const [paginationCS, setPaginationCS] = useState({
    perPage: 9,
    pageNumber: 1,
  });

  const { data, loading, errMessage, hasMore, pagination } = useQuery({ ...paginationCS });

  const newPagination = {
    count: Math.ceil(pagination.total / pagination.per_page) || 0,
    page: pagination.page_number || 1,
  };

  const handleChangePagination = (event, value) => {
    setPaginationCS({ ...paginationCS, pageNumber: value });
  };

  return loading ? (
    <div className={classes.loadingWrapper}>
      <div className="loading"></div>
    </div>
  ) : (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {data.map((elm) => {
            return (
              <Grid key={elm.id} item>
                <Item item={elm} />
              </Grid>
            );
          })}
        </Grid>
        <Grid container className={classes.pagination} justifyContent="center" spacing={6}>
          <Pagination
            {...newPagination}
            color="primary"
            size="large"
            onChange={handleChangePagination}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ListItems;
