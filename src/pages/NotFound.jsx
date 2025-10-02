import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Not Found</h1>
      <p>Trang bạn tìm không tồn tại.</p>
      <Link to="/">Về Home</Link>
    </section>
  );
}
