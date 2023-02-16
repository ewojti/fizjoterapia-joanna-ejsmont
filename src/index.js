import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );