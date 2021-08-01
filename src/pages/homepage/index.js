import {
  CssBaseline,
  Container,
} from "@material-ui/core";
import ListItems from "./ListItems";

function Homepage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="main">
				<ListItems />
      </Container>
    </>
  );
}

export default Homepage;
