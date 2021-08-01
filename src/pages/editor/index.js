import React, { useState } from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";
import EditorComponent from "./Editor";
import SaveButton from "./SaveButton";
function EditorPage() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="editor">
        <div style={{ marginTop: 40 }}></div>
        <Typography variant="h3" component="h2" gutterBottom>
          Create Post
        </Typography>
        <EditorComponent detail={detail} setDetail={setDetail} title={title} setTitle={setTitle} />
        <SaveButton data={{ title, detail }} />
      </Container>
    </>
  );
}

export default EditorPage;
