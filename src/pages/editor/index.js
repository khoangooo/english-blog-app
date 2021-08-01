import React, { useState } from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";
import EditorComponent from "./Editor";
import SaveButton from "./SaveButton";
import SimpleTextInput from "./SimpleTextInput";

function EditorPage() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="editor">
        <Typography variant="h3" component="h2" gutterBottom>
          Title
        </Typography>
        <SimpleTextInput data={title} setData={setTitle} />
        <div style={{ marginTop: 40 }}></div>
        <Typography variant="h3" component="h2" gutterBottom>
          Detail
        </Typography>
        <EditorComponent data={detail} setData={setDetail} suffixClassName="detail" />
        <SaveButton data={{ title, detail }} />
      </Container>
    </>
  );
}

export default EditorPage;
