import { useState } from "react";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const correctPassword = import.meta.env.VITE_LOGIN_PASSWORD;
  console.log("Password correcta:", correctPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'miapassword') {
      localStorage.setItem("authenticated", "true");
      onLogin(); // notifica al componente padre che sei loggato
    } else {
      alert("Password errata");
    }
  };


  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Acceso restringido</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Introduce la contraseña"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}