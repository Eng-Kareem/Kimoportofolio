
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app.jsx";
import MotionDirector from "./MotionDirector.jsx";
import FaceFollower from "./FaceFollower.jsx";

import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MotionDirector />
    <FaceFollower />
  </React.StrictMode>
);
