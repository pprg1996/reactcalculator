import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import appStyle from "./app.module.css";
import buttonsStyle from "./buttons.module.css";
import buttonStyle from "./button.module.css";

function Button({ symbol }) {
  return (
    <button type="button" className={`${buttonStyle.number}`}>{symbol}</button>
  );
}

function Buttons() {
  return (
    <div className={buttonsStyle.buttons}>
      <Button symbol="Sqrt" />
      <Button symbol="^" />
      <Button symbol="Del" />
      <Button symbol="/" />
      <Button symbol="7" />
      <Button symbol="8" />
      <Button symbol="9" />
      <Button symbol="X" />
      <Button symbol="4" />
      <Button symbol="5" />
      <Button symbol="6" />
      <Button symbol="-" />
      <Button symbol="1" />
      <Button symbol="2" />
      <Button symbol="3" />
      <Button symbol="+" />
      <Button symbol="+/-" />
      <Button symbol="0" />
      <Button symbol="." />
      <Button symbol="=" />
    </div>
  );
}

function App() {
  return (
    <div className={appStyle.app}>
      <Buttons />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
