import { useState } from "react";
import axiosInstance from "../api/authentication/axiosConfig.api";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/jwt/create/", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axiosInstance.defaults.headers[
          "Authorization"
        ] = `JWT ${localStorage.getItem("access_token")}`;
        navigate("/");
      }
    } catch {
      setError("Error en las credenciales");
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ display: "block", marginBottom: "0.5rem", color: "#333" }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              color: "#333",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{ display: "block", marginBottom: "0.5rem", color: "#333" }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              color: "#333",
            }}
          />
        </div>
        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
