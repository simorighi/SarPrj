import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <Navbar />
    </header>
    <App />
  </StrictMode>
);
