import React, {useState} from "react";
import { CssBaseline, Container } from "@material-ui/core";
import EditorComponent from "./Editor";
import SaveButton from "./SaveButton";

function EditorPage() {
	const [data, setData] = useState("<h2><i>sdasdsad</i></h2>")

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="editor">
        <EditorComponent data={data} setData={setData}/>
        <SaveButton data={data}/>
      </Container>
    </>
  );
}

export default EditorPage;
