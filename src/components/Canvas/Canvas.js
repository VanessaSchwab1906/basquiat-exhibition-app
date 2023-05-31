import "./Canvas.css";
import BackButton from "../BackButton/BackButton";
import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function Canvas() {
  const styles = {
    boxShadow: "0 0 20px rgba(0, 0, 0, 3)",
  };

  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#F6A7B8");
  const [canvasColor, setCanvasColor] = useState("#8CABD9");
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [eraserWidth, setEraserWidth] = useState(10);

  const handleExportImage = () => {
    if (canvasRef.current) {
      canvasRef.current.exportImage("png").then((data) => {
        const link = document.createElement("a");
        link.href = data;
        link.download = "myBasquiat.png";
        link.click();
      });
    }
  };

  const handleStrokeColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  const handleCanvasColorChange = (event) => {
    setCanvasColor(event.target.value);
  };

  const handleStrokeWidthChange = (event) => {
    const value = parseInt(event.target.value);
    setStrokeWidth(value);
  };

  const handleEraserWidthChange = (event) => {
    const value = parseInt(event.target.value);
    setEraserWidth(value);
  };

  const handleToggleEraseMode = () => {
    setEraseMode((prevMode) => !prevMode);
    if (canvasRef.current) {
      canvasRef.current.eraseMode(!eraseMode);
    }
  };

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const handleResetCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.resetCanvas();
    }
  };

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  const handleRedo = () => {
    if (canvasRef.current) {
      canvasRef.current.redo();
    }
  };

  return (
    <>
      <h1 className="canvas__headline">
        create your <br /> own basquiat
      </h1>
      <BackButton />
      <div className="adjustment-container">
        <label className="canvas__strokeColor">stroke color</label>
        <input
          type="color"
          value={strokeColor}
          onChange={handleStrokeColorChange}
        />
        <label className="canvas__canvasColor">canvas color</label>
        <input
          type="color"
          value={canvasColor}
          onChange={handleCanvasColorChange}
        />
        <label className="canvas__strokeWidth">stroke width</label>
        <input
          type="number"
          min="1"
          max="500"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
        <label className="canvas__eraserWidth">eraser width</label>
        <input
          type="number"
          min="1"
          max="500"
          value={eraserWidth}
          onChange={handleEraserWidthChange}
        />
      </div>
      <div className="canvas-container">
        <div className="canvas-wrapper">
          <ReactSketchCanvas
            style={styles}
            width={400}
            height={400}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            eraserWidth={eraserWidth}
            ref={canvasRef}
            canvasColor={canvasColor}
            className="canvas"
          />
        </div>
      </div>

      <div className="button-container">
        <button className="canvas-button" onClick={handleToggleEraseMode}>
          {eraseMode ? "draw mode" : "erase mode"}
        </button>
        <button className="canvas-button" onClick={handleClearCanvas}>
          clear canvas
        </button>
        <button className="canvas-button" onClick={handleResetCanvas}>
          reset canvas
        </button>
        <button className="canvas-button" onClick={handleUndo}>
          undo
        </button>
        <button className="canvas-button" onClick={handleRedo}>
          redo
        </button>
        <button className="canvas-button" onClick={handleExportImage}>
          save image
        </button>
      </div>
    </>
  );
}
