// src/App.jsx
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  textDecoration: "none",
  borderRadius: 8,
  fontWeight: 600,
  background: isActive ? "#eef" : "transparent",
  border: isActive ? "1px solid #ccd" : "1px solid transparent",
  display: "inline-block",
  marginRight: 8,
});

function Navbar() {
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

function Layout() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: 16 }}>
      <Navbar />
      <div style={{ marginTop: 24 }}>
        {/* QUAN TRỌNG: phải có Outlet để render trang con */}
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
