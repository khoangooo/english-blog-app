import Detail from "../pages/blogs";
import Homepage from "../pages/homepage";

const mainRoutes = [
  {
    path: "/",
    component: Homepage,
    exact: true,
  },
  {
    path: "/blog-detail/:blog_id",
    component: Detail,
    exact: true,
  },
];

export default mainRoutes;
