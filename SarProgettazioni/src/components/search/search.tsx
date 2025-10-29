import React from "react";
import "./search.css";
import { Link } from "react-router-dom";

function Search() {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posizione X relativa al bottone
    const y = e.clientY - rect.top; // Posizione Y relativa al bottone

    button.style.background = `radial-gradient(circle at ${x}px ${y}px,rgb(36, 36, 36),rgb(68, 73, 80))`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.background = ""; // Ripristina lo sfondo originale
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col border shadow-lg justify-align-content-between justify-content-center d-flex gap-5 px-5 bg-white py-4 mt-5 mb-5">    
            <button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="btn btn-dark w-100 rounded-4 my-3 px-4 py-4 si"
            >
              <p className="fs-5 pt-1 text-white">Progetti</p>
            </button>
            <button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="btn btn-dark w-100 rounded-4 my-3 px-4 py-4 si"
            >
              <p className="fs-5 pt-1 text-white">Studio</p>
            </button>
            <button
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="btn btn-dark w-100 rounded-4 my-3 px-4 py-4 si"
            >
              <p className="fs-5 mt-2 text-white">Contatti</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
