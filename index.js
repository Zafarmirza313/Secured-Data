import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recovery from "./routes/RecoveryPage";
import Cloud from "./routes/CloudPage";
import Contact from "./routes/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

