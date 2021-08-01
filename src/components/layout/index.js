import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "../../pages/homepage";
import Detail from "../../pages/blogs";
import EditorPage from "../../pages/editor";

function Layout() {
  return (
    <>
      <Header />
      <Route path="/editor" component={EditorPage} exact={true} />
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/blog-detail/:blog_slug" component={Detail} exact={true} />
      </Switch>
      <Footer />
    </>
  );
}

export default Layout;
