import React, { useState, useEffect } from "react";
import { ImageOutlined } from "@material-ui/icons";

function EditorComponent(props) {
  const { detail, setDetail, title, setTitle } = props;

  const autoGrowTextAreaHeight = (elementId) => () => {
    const elm = document.getElementById(elementId);
    elm.style.height = "auto";
    elm.style.height = elm.scrollHeight + "px";
  };

  return (
    <div className="editor-wrapper">
      <div style={{ margin: "32px 64px" }}>
        <textarea
          id="title"
          className="title"
          onKeyUp={autoGrowTextAreaHeight("title")}
          placeholder="New post title here...."
          onChange={(event) => setTitle(event.target.value)}
        >
          {title}
        </textarea>
      </div>
      <div className="upload">
        <div className="upload-btn">
          <ImageOutlined style={{ fontSize: "2rem" }} />
          <div style={{display: "inline-block", marginLeft: 10}}><span style={{ fontSize: "1rem" }}>Upload image</span></div>
        </div>
      </div>
      <div style={{ margin: "32px 64px" }}>
        <textarea
          id="detail"
          className="detail"
          onKeyUp={autoGrowTextAreaHeight("detail")}
          placeholder="Write your post content here...."
          onChange={(event) => setDetail(event.target.value)}
        >
          {detail}
        </textarea>
      </div>
    </div>
  );
}

export default EditorComponent;
