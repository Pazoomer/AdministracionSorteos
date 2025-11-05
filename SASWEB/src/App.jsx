import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Tu página principal con los sorteos
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: "80px" }}>
        <Routes>
          {/* Página principal con los sorteos */}
          <Route path="/" element={<Home />} />
          {/* Página de inicio de sesión */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;