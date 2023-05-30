import "./DragAndDrop.css";
import BackButton from "../BackButton/BackButton";
import React, { useState } from "react";
import Draggable from "react-draggable";
import canvas_1 from "../../assets/images/canvas/canvas_1.PNG";
import canvas_2 from "../../assets/images/canvas/canvas_2.PNG";
import canvas_3 from "../../assets/images/canvas/canvas_3.PNG";
import canvas_4 from "../../assets/images/canvas/canvas_4.PNG";
import canvas_5 from "../../assets/images/canvas/canvas_5.PNG";
import canvas_6 from "../../assets/images/canvas/canvas_6.PNG";
import Drawer from "rc-drawer";
import ReactDom from "react-dom";

export default function DragAndDrop() {
  <Drawer>Hello</Drawer>;
}

// export default function DragAndDrop() {
//   const [isDropped, setIsDropped] = useState(false);
//   const [position, setPosition] = useState({ x: 200, y: 200 });

//   const handleDrop = () => {
//     setIsDropped(true);
//   };

//   const handleDrag = (e, ui) => {
//     setPosition({ x: ui.x, y: ui.y });
//   };

//   return (
//     <>
//       <h1 className="dragndrop__headline">create your own basquiat</h1>
//       <BackButton />
//       <div className="canvas"> </div>
//     </>
//   );
// }
