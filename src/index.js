import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/Store"
import Admin from "./Admin";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
</Provider>

);
