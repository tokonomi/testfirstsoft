import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)