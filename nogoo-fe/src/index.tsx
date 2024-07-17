import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Login from "./pages/login";
import Signup from "./pages/signup/signup";
import Main from "./pages/main";
import { Toaster } from "react-hot-toast";
import Create from "./pages/create/create";
import MainLayout from "./MainLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </React.StrictMode>
);
