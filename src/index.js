import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return <div className="loading">Loading...</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
