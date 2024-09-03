import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("access_token");
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
      <Routes>
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout
                esBarraLateralAbierta={esBarraLateralAbierta}
                alternarBarraLateral={alternarBarraLateral}
                margenIzquierdo={margenIzquierdo}
              >
                <DashboardPage />
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
