import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/home.tsx";
import Search from "./components/search/search.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
      <Search />
    <App />
  </StrictMode>
);
