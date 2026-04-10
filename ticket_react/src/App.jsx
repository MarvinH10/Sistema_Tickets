import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [esBarraLateralAbierta, setEsBarraLateralAbierta] = useState(
    JSON.parse(localStorage.getItem("esBarraLateralAbierta")) || false
  );

  const margenIzquierdo = esBarraLateralAbierta ? "12rem" : "3rem";

  const alternarBarraLateral = () => {
    const nuevoEstado = !esBarraLateralAbierta;
    setEsBarraLateralAbierta(nuevoEstado);
    localStorage.setItem("esBarraLateralAbierta", JSON.stringify(nuevoEstado));
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <div
          className="fixed top-0 left-0 z-10 flex items-center w-full h-12 transition-all duration-300 ease-in-out bg-turquesa-ticket"
          style={{ marginLeft: margenIzquierdo }}
        >
          <button
            onClick={alternarBarraLateral}
            className="ml-4 text-white focus:outline-none"
          >
            {esBarraLateralAbierta ? "✕" : "☰"}
          </button>
        </div>
        <Navigation
          esBarraLateralAbierta={esBarraLateralAbierta}
          alternarBarraLateral={alternarBarraLateral}
        />
        <div
          className="flex-grow p-4 mt-12 transition-all duration-300 ease-in-out"
          style={{ marginLeft: margenIzquierdo }}
        >
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
