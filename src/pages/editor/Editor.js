import React, { useState, useEffect } from "react";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EditorComponent(props) {
  const { data, setData, suffixClassName } = props;

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setData(currentContentAsHTML);
  };

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(data);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(contentState));
  }, []);

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName={`draft-wrapper-class ${suffixClassName}`}
        editorClassName={`draft-editor-class ${suffixClassName}`}
        toolbarClassName="draft-toolbar-class"
      />
    </>
  );
}

export default EditorComponent;
