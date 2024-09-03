import { useState } from "react";
import axiosInstance from "../api/authentication/axiosConfig.api";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await axiosInstance.post("/auth/users/", {
        email: email,
        password: password,
        re_password: rePassword,
      });
      if (response.status === 201) {
        navigate("/login");
      }
    } catch {
      setError("Error al registrar el usuario");
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>
        Registrar Usuario
      </h2>
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
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ display: "block", marginBottom: "0.5rem", color: "#333" }}
          >
            Contraseña
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
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{ display: "block", marginBottom: "0.5rem", color: "#333" }}
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            placeholder="Confirme su contraseña"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
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
          Registrar
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
