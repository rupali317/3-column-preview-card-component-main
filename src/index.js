import React from "react";
import ReactDOM from "react-dom/client";
//import "./stylesheets/index.scss";
import { GroupCard } from "./components/GroupCard/index.js";
import { Footer } from "./components/Footer/index.js";
import reportWebVitals from "./reportWebVitals";

const groupCard = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

groupCard.render(
  <React.StrictMode>
    <GroupCard></GroupCard>
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals(console.log);
