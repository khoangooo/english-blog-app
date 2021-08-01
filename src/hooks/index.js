import { useState, useEffect } from "react";
import blogsApi from "../api/apiBlogs";

export const useQuery = (query = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const params = {
      page_number: query.pageNumber,
      per_page: query.perPage
    };

    (async function () {
      setLoading(true);
      try {
        const res = await blogsApi.getBlogs({ params });
        setLoading(false);
        setErrMessage("");
        setData(res?.data);
        setHasMore(res?.data.length > 0);
        setPagination(res?.pagination)
      } catch (err) {
        setLoading(false);
        setErrMessage(err);
        setData([]);
        setPagination(res?.pagination)
      }
    })();
  }, [query.pageNumber]);

  return { data, loading, errMessage, hasMore, pagination };
};
