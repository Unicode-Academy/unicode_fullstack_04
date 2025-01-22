import "./App.scss";
import img1 from "./vite.svg";
import config from "./config.json";
import { requestLogin } from "./utils/auth";
import moment from "moment";

export const App = () => {
  requestLogin();
  console.log(moment().format("DD/MM/YYYY"));

  return `<h1 class="title">Hello world</h1>`;
};
