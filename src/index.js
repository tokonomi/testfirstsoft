import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./components/App";

createRoot(document.querySelector("#root")).render(
    <HashRouter>
        <App/>
    </HashRouter>
)