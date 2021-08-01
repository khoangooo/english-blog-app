import { useState } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import ListItems from "./ListItems";
import SearchBar from "./SearchBar";
import { useQuery } from "../../hooks";

function Homepage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [slug, setSlug] = useState("");

  const dataFromApi = useQuery({ pageNumber, slug});

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="main">
        <SearchBar setSlug={setSlug} />
        <ListItems {...dataFromApi} setPageNumber={setPageNumber} />
      </Container>
    </>
  );
}

export default Homepage;
