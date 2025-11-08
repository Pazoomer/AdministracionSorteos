import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SorteoDetalles from "./pages/SorteoDetalles";

function App() {
  return (
    <BrowserRouter basename="/AdministracionSorteos">
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1" style={{ marginLeft: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sorteos/:id" element={<SorteoDetalles />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
