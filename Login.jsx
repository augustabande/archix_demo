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
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  }}
>
  <div
    style={{
      padding: '2rem',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px',
    }}
  >
    <h2 style={{ marginBottom: '1.5rem' }}>Acceso restringido</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Introduce la contraseña"
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#222',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Entrar
      </button>
    </form>
  </div>
</div>

  );
}