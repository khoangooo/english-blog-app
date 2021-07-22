import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./pages/Editor";
import mainRoutes from "./routes";
import "./assets/styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          {mainRoutes.map((item, index) => (
            <Route key={index} path={item.path} component={item.component} exact={item.exact} />
          ))}
          <Route path="/editor" component={Editor} exact={true} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
