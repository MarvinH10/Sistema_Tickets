import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Navigation() {
  const [esBarraLateralAbierta, establecerBarraLateralAbierta] = useState(
    JSON.parse(localStorage.getItem("esBarraLateralAbierta")) || false
  );

  const alternarBarraLateral = () => {
    const nuevoEstado = !esBarraLateralAbierta;
    establecerBarraLateralAbierta(nuevoEstado);
    localStorage.setItem("esBarraLateralAbierta", JSON.stringify(nuevoEstado));
  };

  useEffect(() => {
    const estadoGuardado = JSON.parse(
      localStorage.getItem("esBarraLateralAbierta")
    );
    if (estadoGuardado !== null) {
      establecerBarraLateralAbierta(estadoGuardado);
    }
  }, []);

  return (
    <div className="flex">
      <div
        className={`${
          esBarraLateralAbierta ? "w-48" : "w-12"
        } h-screen text-white transition-width duration-300 ease-in-out flex flex-col`}
      >
        <div style={{ backgroundColor: "#009688" }} className="flex flex-col">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={alternarBarraLateral}
              className="focus:outline-none text-white ml-auto"
            >
              {esBarraLateralAbierta ? "✕" : "☰"}
            </button>
          </div>
        </div>
        <div className="flex-grow" style={{ backgroundColor: "#212529" }}>
          <nav className="flex-grow">
            <ul className="mt-5">
              <li className="flex items-center hover:bg-gray-700 pt-2 pb-2 pl-4">
                <i className="bi bi-speedometer2"></i>
                <Link
                  to="/"
                  className={`${
                    esBarraLateralAbierta ? "ml-4 opacity-100" : "opacity-0"
                  } ml-4 text-sm font-semibold transition-opacity duration-600 ease-in-out delay-250`}
                >
                  Dashboard
                </Link>
              </li>
              <li className="flex items-center hover:bg-gray-700 pt-2 pb-2 pl-4">
                <i className="bi bi-ticket-perforated"></i>
                <Link
                  to="/tickets"
                  className={`${
                    esBarraLateralAbierta ? "ml-4 opacity-100" : "opacity-0"
                  } ml-4 text-sm font-semibold transition-opacity duration-600 ease-in-out delay-250`}
                >
                  Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
