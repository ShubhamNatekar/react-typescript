import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./componants/index.css";
import App from "./assessment-4/App";

// createRoot(document.getElementById('root')!).render(<BrowserRouter><Launcher /></BrowserRouter>)
createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
