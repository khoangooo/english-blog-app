import React, { useState, useEffect } from "react";
import imagesApi from "../../../api/apiImages";
import { CircularProgress, Typography } from "@material-ui/core";

function EditorComponent(props) {
  const { detail, setDetail, title, setTitle } = props;

  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [uploadingImg, setUploadingImg] = useState(false);
  const [currentImageId, setCurrentImageIg] = useState("");

  useEffect(() => {
    (async function () {
      if (file !== null) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
          setUploadingImg(true);
          const res = await imagesApi.uploadImages({ file: reader.result, fileName: file.name });
          if (res.status) {
            setUploadingImg(false);
            // setImageURL(URL.createObjectURL(file));
            setImageURL(res.data.image_url)
          } else {
            setUploadingImg(false);
            setImageURL("");
          }
        };
        reader.onerror = function (error) {
          setUploadingImg(false);
          console.log("Error: ", error);
        };
      }
    })();
  }, [file]);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div style={{ margin: "32px 64px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {imageURL && (
          <img
            id="coverImageUploaded"
            src={imageURL}
            className="cover-img-uploaded"
            width={250}
            height={105}
            alt="Post cover"
          />
        )}
        {uploadingImg ? (
          <>
            <CircularProgress size={30}/>
            <Typography variant="h6" component="h6">Uploading...</Typography>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default EditorComponent;
