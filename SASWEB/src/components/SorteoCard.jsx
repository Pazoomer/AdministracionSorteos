import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SorteoCard.css";

const SorteoCard = ({ sorteo, onClick }) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4 text-center m-3 sorteo-card"
      onClick={onClick}
    >
      <img
        src={sorteo.imagen}
        alt={sorteo.nombre}
        className="card-img-top p-3"
      />
      <div className="card-body">
        <h6 className="card-title">{sorteo.nombre}</h6>
        <p className="text-muted">${sorteo.precio}</p>
      </div>
    </div>
  );
};

export default SorteoCard;