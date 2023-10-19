import "./styles/main.scss";
import ReactDOM from "react-dom";
import { App } from "./App";

const root = document.querySelector("#root");

if (root) {
  ReactDOM.render(<App />, root);
} else {
  throw new Error("没有找到root节点");
}
