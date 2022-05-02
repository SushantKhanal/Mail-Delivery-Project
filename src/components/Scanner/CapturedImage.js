import React from "react";

export const CapturedImage = (props) => {
  return (
    <div
      className={
        "demo-image-preview " + props.isFullscreen
          ? "demo-image-preview-fullscreen"
          : ""
      }
    >
      <img src={props.imageData} alt="" />
    </div>
  );
};

export default CapturedImage;
