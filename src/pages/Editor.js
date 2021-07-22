import React, { useState } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Admin() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  // const createMarkup = (html) => {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // };
  
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="draft-wrapper-class"
          editorClassName="draft-editor-class"
          toolbarClassName="draft-toolbar-class"
        />
        {/* <div className="draft-preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
      </Container>
    </>
  );
}

export default Admin;
