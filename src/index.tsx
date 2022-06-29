import ReactDOM from "react-dom/client";
import {App} from "./App";
import { ComponentA } from "./Exercises/session123";
import "./styles/main.css"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    // <App/>
    <ComponentA/>
);

// ReactDOM.render(<App/>, document.querySelector("#app"));