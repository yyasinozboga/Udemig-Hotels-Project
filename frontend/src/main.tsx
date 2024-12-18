import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <App />

    <ToastContainer />

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
