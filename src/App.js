import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import "./assets/styles/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
