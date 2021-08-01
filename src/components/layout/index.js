import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EditorPage from "../../pages/editor";
import mainRoutes from "../../routes";

function Layout() {
  return (
    <>
      <Header />
      <Switch>
        {mainRoutes.map((item, index) => (
          <Route key={index} path={item.path} component={item.component} exact={item.exact} />
        ))}
        <Route path="/editor" component={EditorPage} exact={true} />
      </Switch>
      <Footer />
    </>
  );
}

export default Layout;
