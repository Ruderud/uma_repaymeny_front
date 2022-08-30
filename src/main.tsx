import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { userQueryClient } from "./query/Auth";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <QueryClientProvider client={userQueryClient}>
        <App />
      </QueryClientProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
