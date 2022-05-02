import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Tesseract from "tesseract.js";
//Tesseract supports more than 100 languages, automatic text orientation and script detection
import CapturedImage from "./CapturedImage";

function Scanner(props) {
  const [imageData, setImageData] = React.useState("");

  const imageToText = (imageData) => {
    if (imageData)
      Tesseract.recognize(imageData, {
        lang: "eng",
      })
        .catch((error) => console.log("Error processing captured image"))
        .then((res) => {
          //save res.text
        });
  };

  React.useEffect(() => {
    imageToText(imageData);
  }, [imageData]);

  return (
    <div>
      {imageData ? (
        <CapturedImage imageData={imageData} isFullscreen={false} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={(data) => {
            setImageData(data);
          }}
          isFullscreen={false}
          isImageMirror={false}
        />
      )}
    </div>
  );
}

export default Scanner;
