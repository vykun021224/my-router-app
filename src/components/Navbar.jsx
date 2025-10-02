import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  textDecoration: "none",
  borderRadius: 8,
  fontWeight: 600,
  background: isActive ? "#eef" : "transparent",
  border: "1px solid #ccd",
  marginRight: 8,
  display: "inline-block",
});

export default function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      <NavLink to="/products" style={linkStyle}>Products</NavLink>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
    </nav>
  );
}
