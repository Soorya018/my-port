import React from "react";
import ReactDOM from "react-dom";
import "./scss/custom.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Add theme class to body
const body = document.body;
const observer = new MutationObserver(() => {
  const appElement = document.getElementById("root");
  body.className = appElement?.dataset.theme === "dark" ? "dark-theme" : "";
});
observer.observe(document.getElementById("root"), { attributes: true });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
