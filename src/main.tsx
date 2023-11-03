import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const authDomain = import.meta.env.VITE_AUTHO_DOMAIN;
const authClientId = import.meta.env.VITE_AUTHO_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider domain={authDomain} clientId={authClientId}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
