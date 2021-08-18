import React, { useState, useEffect } from "react";
import imagesApi from "../../../api/apiImages";
import Base64 from "../../../utils";

function EditorComponent(props) {
  const { detail, setDetail, title, setTitle } = props;

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    (async function () {
      if (file !== null) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
          console.log("file.name", file.name)
          const res =await imagesApi.uploadImages({file: reader.result, fileName: file.name})
          console.log("res", res)
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
        
      }
    })();
  }, [file]);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ margin: "32px 64px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {file !== null && (
          <img
            id="coverImageUploaded"
            src={imagePreview}
            className="cover-img-uploaded"
            width={250}
            height={105}
            alt="Post cover"
          />
        )}
        <div className="cover-image-uploaded-wrapper-btn">
          <button className={file === null ? "cover-img__btn" : "cover-img__btn--change"}>
            <label htmlFor="upload-cover" className="cover-img-label">
              {file === null ? "Add a cover image" : "Change"}
            </label>
            <input
              id="upload-cover"
              type="file"
              className="cover-img-input"
              accept="image/*"
              onChange={handleChangeFile}
            />
          </button>
          {/* <button className="cover-img__btn--change">Change</button> */}
          {file !== null && <button className="cover-img__btn--remove">Remove</button>}
        </div>
      </div>
    </div>
  );
}

export default EditorComponent;
