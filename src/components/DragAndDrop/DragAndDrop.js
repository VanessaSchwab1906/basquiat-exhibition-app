import "./DragAndDrop.css";
import BackButton from "../BackButton/BackButton";
import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function DragAndDrop() {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
  };

  const canvasRef = useRef(null);

  const handleExportImage = () => {
    if (canvasRef.current) {
      canvasRef.current.exportImage("png").then((data) => {
        const link = document.createElement("a");
        link.href = data;
        link.download = "myImage.png";
        link.click();
      });
    }
  };

  return (
    <>
      <h1 className="dragndrop__headline">create your own basquiat</h1>
      <BackButton />
      <ReactSketchCanvas
        style={styles}
        width={400}
        height={400}
        strokeWidth={10}
        strokeColor="red"
        ref={canvasRef}
        canvasColor="#8CABD9"
        className="canvas"
      />
      <button onClick={handleExportImage}>Get Image</button>
    </>
  );
}
