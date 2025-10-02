import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: 360 }}>
        <input type="email" placeholder="Email" required style={{ width:"100%", marginBottom:8, padding:8 }}/>
        <input type="password" placeholder="Password" required style={{ width:"100%", marginBottom:8, padding:8 }}/>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
}
