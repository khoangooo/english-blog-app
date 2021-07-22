import Detail from "../components/Detail";
import Homepage from "../components/Homepage";

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
