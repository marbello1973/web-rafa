import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { PersonalizationProvider } from "./component/context/personalization.context.tsx";
import { CartProvider } from "./component/Cart/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersonalizationProvider>
      <BrowserRouter basename="/web-rafa">
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </PersonalizationProvider>
  </StrictMode>
);
