import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Đảm bảo file App.tsx hoặc App.jsx tồn tại

// Tìm và gắn phần tử DOM gốc
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
